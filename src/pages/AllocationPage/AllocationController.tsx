import assert from 'assert';
import React, { useEffect, useState } from 'react';

import isEqual from 'lodash/isEqual';
import { useQuery, useQueryClient } from 'react-query';
import { matchPath, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LoadingModal } from '../../components';
import { useDeepChangeEffect } from '../../hooks';
import useConnectedAddress from '../../hooks/useConnectedAddress';
import { useSafeMutation } from '../../hooks/useSafeMutation';
import { updateTeammates } from '../../lib/gql/mutations';
import { rUsersMap, useSelectedCircle } from '../../recoilState';
import {
  NO_TEAM_STEPS,
  STEP_ALLOCATION,
  STEP_MY_EPOCH,
  STEP_MY_TEAM,
  STEPS,
} from '../../routes/allocation';
import { IAllocationStep, ISimpleGift, ISimpleGiftUser } from '../../types';

import AllocationEpoch from './AllocationEpoch';
import AllocationGive from './AllocationGive';
import AllocationPage from './AllocationPage';
import AllocationTeam from './AllocationTeam';
import { calculateGifts } from './calculations';
import { getPendingGiftsFrom, getTeammates } from './queries';

const AllocationController = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const address = useConnectedAddress();

  const {
    myUser: selectedMyUser,
    circle: selectedCircle,
    circleEpochsStatus: { epochIsActive },
  } = useSelectedCircle();

  /* Teammates stuff */
  const {
    data,
    isLoading: isLoading,
    isIdle,
    isStale,
    isRefetching,
  } = useQuery(
    ['teammates', selectedCircle.id],
    () => getTeammates(selectedCircle.id, address as string),
    {
      enabled: !!(selectedCircle.id && address),
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  const { allUsers, startingTeammates } = data || { allUsers: [] };

  const [localTeammates, setLocalTeammates] = useState<
    NonNullable<typeof startingTeammates>
  >([]);
  const [teammatesChanged, setTeammatesChanged] = useState<boolean>(false);

  const toggleLocalTeammate = (userId: number) => {
    const addedUser = allUsers?.find(u => u.id === userId);
    assert(addedUser);
    const newTeammates = localTeammates.find(u => u.id === userId)
      ? localTeammates.filter(u => u.id !== userId)
      : [...localTeammates, addedUser];
    setLocalTeammates(newTeammates);
    console.log('ULG.TOGGLE');
    updateLocalGifts(newTeammates);
  };

  const setAllLocalTeammates = () => {
    assert(allUsers);
    setLocalTeammates(allUsers);
    console.log('ULG.allUsers');
    updateLocalGifts(allUsers);
  };

  const clearLocalTeammates = () => {
    if (!selectedCircle.team_selection) {
      console.error('clearLocalTeammates with circle without team selection');
      return;
    }
    setLocalTeammates([]);
    console.log('ULG.CLEAR');
    updateLocalGifts([]);
  };

  const saveTeammates = useSafeMutation(
    async () => {
      await updateTeammates(
        selectedCircle.id,
        localTeammates.map(u => u.id)
      );
      if (epochIsActive) {
        setActiveStep(STEP_ALLOCATION.key);
        navigate(STEP_ALLOCATION.path);
      }
      await queryClient.invalidateQueries('teammates');
    },
    {
      success: 'Saved Teammates',
    }
  );
  /* ----- */

  /* Allocation Stuff */
  const [localGifts, setLocalGifts] = useState<ISimpleGift[]>([]);

  // FIXME: handle the loading state here
  const {
    data: pendingGiftsFrom,
    isLoading: isPendingGiftsLoading,
    isIdle: isPendingGiftsIdle,
  } = useQuery(
    ['pending-gifts', selectedCircle.id],
    () => getPendingGiftsFrom(selectedCircle.id, address as string),
    {
      enabled: !!(selectedCircle.id && address),
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  const givePerUser = new Map<number, ISimpleGift>(
    localGifts.map(g => [g.user.id, g])
  );
  const updateLocalGift = (updatedGift: ISimpleGift): void => {
    setLocalGifts(prevState => {
      // This is to ensure it can't go negative in the UI
      updatedGift.tokens = Math.max(0, updatedGift.tokens);

      const idx = prevState.findIndex(g => g.user.id === updatedGift.user.id);

      let updatedGifts;
      if (idx === -1) {
        updatedGifts = [...prevState, updatedGift];
      } else {
        updatedGifts = prevState.slice();
        updatedGifts[idx] = updatedGift;
      }

      // prevent giving more than you have
      const total = updatedGifts.reduce((t, g) => t + g.tokens, 0);
      if (
        total > (selectedMyUser.non_giver ? 0 : selectedMyUser.starting_tokens)
      )
        return prevState;

      return updatedGifts;
    });
  };

  /* ----- */

  /* Connected between teammates / allocate */
  const updateLocalGifts = (
    newTeammates: ISimpleGiftUser[],
    newGifts?: ISimpleGift[]
  ) => {
    console.log('X.UPDATELOCALGIFTS');
    console.log(newTeammates);
    setLocalGifts(calculateGifts(newTeammates, newGifts));
  };
  /* ----- */

  /* Navigation stuff */

  const [activeStep, setActiveStep] = React.useState(0);
  const getHandleStep = (step: IAllocationStep) => () => {
    navigate(step.path);
    setActiveStep(step.key);
  };

  const allSteps = !selectedCircle.team_selection ? NO_TEAM_STEPS : STEPS;
  const [completedSteps, setCompletedSteps] = useState<Set<IAllocationStep>>(
    new Set()
  );

  useEffect(() => {
    const exactStep = allSteps.find(({ path }) =>
      matchPath(path, location.pathname)
    );
    if (exactStep === undefined) {
      if (!completedSteps.has(STEP_MY_EPOCH)) {
        setActiveStep(STEP_MY_EPOCH.key);
      } else if (!epochIsActive) {
        if (selectedCircle.team_selection) {
          setActiveStep(STEP_MY_TEAM.key);
        }
      } else {
        setActiveStep(STEP_ALLOCATION.key);
      }
    } else {
      setActiveStep(exactStep.key);
    }
    // FIXME: with recoil this didnt run until completedSteps was properly loaded, now it will flash and move url i think
  }, [location, completedSteps]);

  useEffect(() => {
    if (!pendingGiftsFrom) {
      // not done loading yet
      return;
    }
    if (selectedMyUser === undefined) {
      setCompletedSteps(new Set());
    }
    const cSteps = new Set<IAllocationStep>();
    if (!selectedMyUser.epoch_first_visit) {
      cSteps.add(STEP_MY_EPOCH);
    }
    if (
      !selectedMyUser.epoch_first_visit &&
      selectedMyUser.teammates &&
      selectedMyUser.teammates.length > 0
    ) {
      cSteps.add(STEP_MY_TEAM);
    }
    if (pendingGiftsFrom.length > 0) {
      cSteps.add(STEP_ALLOCATION);
    }
    console.log('CURSTEPS', cSteps);
    setCompletedSteps(cSteps);
  }, [selectedMyUser, pendingGiftsFrom]);

  /* ----- */

  /* A bunch of crazy dependency junk */

  useDeepChangeEffect(() => {
    // not confident about this
    const tm = startingTeammates ?? [];
    setLocalTeammates(tm);
    console.log('ULG.selectedMyUser.teammates');
    updateLocalGifts(tm);
  }, [selectedMyUser.teammates]);

  const usersMap = useRecoilValue(rUsersMap);

  useDeepChangeEffect(() => {
    if (isPendingGiftsLoading || isPendingGiftsIdle || isLoading) {
      return;
    }
    if (pendingGiftsFrom) {
      const newGifts: ISimpleGift[] = [];
      for (const g of pendingGiftsFrom) {
        const u: ISimpleGiftUser | undefined = usersMap.get(g.recipient_id);
        if (!u) {
          console.warn(
            'gift has no user dude???',
            usersMap.get(g.recipient_id)
          );
          continue;
        }
        newGifts.push({
          user: u,
          tokens: g.tokens,
          note: g.note,
        });
      }
      console.warn(
        'ULG.pendingGiftsFrom',
        localTeammates.length,
        newGifts.length
      );
      updateLocalGifts(localTeammates, newGifts);
    }
  }, [
    isLoading,
    localTeammates,
    pendingGiftsFrom,
    isPendingGiftsLoading,
    isPendingGiftsIdle,
  ]);

  useEffect(() => {
    if (!isLoading && !isIdle && !isStale && data?.startingTeammates) {
      setLocalTeammates(data?.startingTeammates);
    }
  }, [data, isLoading, isIdle, isStale]);

  useEffect(() => {
    if (isLoading || isIdle) return;
    setTeammatesChanged(
      !isEqual(
        localTeammates.map(u => u.id),
        startingTeammates?.map(u => u.id)
      )
    );
  }, [startingTeammates, localTeammates, isLoading, isIdle]);

  /* ----- */

  if (isLoading || isIdle || isRefetching || !pendingGiftsFrom)
    return <LoadingModal visible text={'Loading Teammates'} />;

  return (
    <AllocationPage
      allSteps={allSteps}
      activeStep={activeStep}
      completedSteps={completedSteps}
      getHandleStep={getHandleStep}
    >
      {selectedMyUser && activeStep === 0 && (
        <>
          <AllocationEpoch
            // FIXME: why both
            getHandleStep={getHandleStep}
            setActiveStep={setActiveStep}
          />
        </>
      )}

      {selectedMyUser && activeStep === 1 && (
        <AllocationTeam
          onSave={saveTeammates}
          allUsers={allUsers}
          onContinue={getHandleStep(STEP_ALLOCATION)}
          changed={teammatesChanged}
          toggleLocalTeammate={toggleLocalTeammate}
          clearLocalTeammates={clearLocalTeammates}
          localTeammates={localTeammates}
          setAllLocalTeammates={setAllLocalTeammates}
          givePerUser={givePerUser}
        />
      )}

      {epochIsActive && activeStep === 2 && (
        <>
          <AllocationGive
            localGifts={localGifts}
            givePerUser={givePerUser}
            updateLocalGift={updateLocalGift}
            setLocalGifts={setLocalGifts}
            pendingGiftsFrom={pendingGiftsFrom}
          />
        </>
      )}
    </AllocationPage>
  );
};

export default AllocationController;
