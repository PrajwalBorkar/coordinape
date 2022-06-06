/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import isEqual from 'lodash/isEqual';
import { useQuery } from 'react-query';
import { matchPath, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LoadingModal } from '../../components';
import { useDeepChangeEffect } from '../../hooks';
import useConnectedAddress from '../../hooks/useConnectedAddress';
import { rUsersMap, useSelectedCircle } from '../../recoilState';
import {
  NO_TEAM_STEPS,
  STEP_ALLOCATION,
  STEP_MY_EPOCH,
  STEP_MY_TEAM,
  STEPS,
} from '../../routes/allocation';
import { IAllocationStep, ISimpleGift, ISimpleGiftUser } from '../../types';
import { Box } from '../../ui/Box/Box';

import AllocationEpoch from './AllocationEpoch';
import AllocationGive from './AllocationGive';
import { AllocationStepper } from './AllocationStepper';
import AllocationTeam from './AllocationTeam';
import { calculateGifts } from './calculations';
import {
  getPendingGiftsFrom,
  getTeammates,
  PendingGift,
  PotentialTeammate,
  Teammate,
} from './queries';

const AllocationPage = () => {
  const address = useConnectedAddress();
  const { circle: selectedCircle } = useSelectedCircle();

  /* Make sure the teammates are loaded */
  const { data } = useQuery(
    ['teammates', selectedCircle.id],
    () => getTeammates(selectedCircle.id, address as string),
    {
      enabled: !!(selectedCircle.id && address),
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  // Make sure the pendingGifts are loaded
  const { data: pendingGiftsFrom } = useQuery(
    ['pending-gifts', selectedCircle.id],
    () => getPendingGiftsFrom(selectedCircle.id, address as string),
    {
      enabled: !!(selectedCircle.id && address),
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  /* Return here if we don't have the data so that the actual page component can be simpler */
  if (!data || !pendingGiftsFrom) {
    return <LoadingModal visible={true} />;
  }

  const { allUsers, startingTeammates } = data;

  return (
    <AllocationContents
      startingTeammates={startingTeammates}
      allUsers={allUsers}
      pendingGiftsFrom={pendingGiftsFrom}
    />
  );
};

type AllocationContentsProps = {
  startingTeammates: Teammate[];
  allUsers: PotentialTeammate[];
  pendingGiftsFrom: PendingGift[];
};
const AllocationContents = ({
  startingTeammates,
  allUsers,
  pendingGiftsFrom,
}: AllocationContentsProps) => {
  const navigate = useNavigate();

  const {
    myUser: selectedMyUser,
    circle: selectedCircle,
    circleEpochsStatus: { epochIsActive },
  } = useSelectedCircle();

  const [localTeammates, setLocalTeammates] =
    useState<Teammate[]>(startingTeammates);
  const [teammatesChanged, setTeammatesChanged] = useState<boolean>(false);

  /* ----- */

  /* Allocation Stuff */
  const [localGifts, setLocalGifts] = useState<ISimpleGift[]>([]);

  const givePerUser = new Map<number, ISimpleGift>(
    localGifts.map(g => [g.user.id, g])
  );

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
  }, [location, completedSteps]);

  useEffect(() => {
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
    const newGifts: ISimpleGift[] = [];
    for (const g of pendingGiftsFrom) {
      const u: ISimpleGiftUser | undefined = usersMap.get(g.recipient_id);
      if (!u) {
        console.warn('gift has no user dude???', usersMap.get(g.recipient_id));
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
  }, [localTeammates, pendingGiftsFrom]);

  useEffect(() => {
    setTeammatesChanged(
      !isEqual(
        localTeammates.map(u => u.id),
        startingTeammates?.map(u => u.id)
      )
    );
  }, [startingTeammates, localTeammates]);

  useEffect(() => {
    if (localTeammates) {
      updateLocalGifts(localTeammates);
    }
  }, [localTeammates]);
  /* ----- */

  return (
    <Box
      css={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AllocationStepper
        allSteps={allSteps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        getHandleStep={getHandleStep}
      />
      <Box
        css={{
          flex: 1,
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          overflow: 'auto',
          width: '100%',
        }}
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
            allUsers={allUsers}
            onContinue={getHandleStep(STEP_ALLOCATION)}
            changed={teammatesChanged}
            localTeammates={localTeammates}
            setLocalTeammates={setLocalTeammates}
            givePerUser={givePerUser}
            setActiveStep={setActiveStep}
          />
        )}

        {epochIsActive && activeStep === 2 && (
          <>
            <AllocationGive
              localGifts={localGifts}
              givePerUser={givePerUser}
              setLocalGifts={setLocalGifts}
              pendingGiftsFrom={pendingGiftsFrom}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default AllocationPage;
