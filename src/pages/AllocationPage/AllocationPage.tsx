/* eslint-disable no-console */

import assert from 'assert';
import React, { useEffect, useState } from 'react';

import isEqual from 'lodash/isEqual';
import { useQuery, useQueryClient } from 'react-query';
import { useLocation, matchPath, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import {
  makeStyles,
  Stepper,
  Step,
  StepButton,
  IconButton,
} from '@material-ui/core';

import useConnectedAddress from '../../hooks/useConnectedAddress';
import { useSafeMutation } from '../../hooks/useSafeMutation';
import { updateTeammates } from '../../lib/gql/mutations';
import { Button } from '../../ui';
import { ApeInfoTooltip, LoadingModal } from 'components';
import {
  useApiWithSelectedCircle,
  useAllocation,
  useDeepChangeEffect,
} from 'hooks';
import { BalanceIcon } from 'icons';
import { rUsersMap, useSelectedCircle } from 'recoilState/app';
import {
  STEP_MY_EPOCH,
  STEP_MY_TEAM,
  STEP_ALLOCATION,
  STEPS,
  NO_TEAM_STEPS,
} from 'routes/allocation';

import AllocationEpoch from './AllocationEpoch';
import AllocationGive from './AllocationGive';
import AllocationTeam from './AllocationTeam';
import { getPendingGiftsFrom, getTeammates } from './queries';

import { IAllocationStep, ISimpleGift, ISimpleGiftUser } from 'types';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepperRoot: {
    width: '100%',
    justifyContent: 'center',
    '& .MuiStepConnector-root': {
      maxWidth: theme.spacing(10),
    },
    borderBottom: `1px solid ${theme.colors.border}`,
  },
  body: {
    flex: 1,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    overflow: 'auto',
    width: '100%',
  },
  stepRoot: {
    maxWidth: '190px',
  },
  title: {
    margin: theme.spacing(2, 0, 0),
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.3,
    color: theme.colors.text,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  buttonContainer: {
    position: 'fixed',
    bottom: 0,
    marginBottom: 53,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceContainer: {
    position: 'fixed',
    right: 50,
    top: theme.custom.appHeaderHeight + 90,
    zIndex: 1,
    padding: theme.spacing(0.5, 1),
    display: 'flex',
    borderRadius: 8,
    justifyContent: 'flex-start',
    background: 'linear-gradient(0deg, #FAF1F2, #FAF1F2)',
    boxShadow: '2px 3px 6px rgba(81, 99, 105, 0.12)',
  },
  balanceDescription: {
    margin: 0,
    fontSize: 20,
    fontWeight: 300,
    color: theme.colors.text,
    '&:first-of-type': {
      fontWeight: 500,
      color: theme.colors.alert,
    },
  },
  rebalanceButton: {
    color: theme.colors.text,
    marginLeft: theme.spacing(1),
    padding: '1px',
  },
}));

export const AllocationPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const {
    circleId,
    myUser: selectedMyUser,
    circle: selectedCircle,
    circleEpochsStatus: { epochIsActive },
  } = useSelectedCircle();
  const {
    localGiftsChanged,
    tokenRemaining,
    rebalanceGifts,
    saveGifts,
    updateLocalGifts,
    givePerUser,
    localGifts,
    setLocalGifts,
  } = useAllocation(circleId);

  const address = useConnectedAddress();

  const { updateMyUser } = useApiWithSelectedCircle();
  const allSteps = !selectedCircle.team_selection ? NO_TEAM_STEPS : STEPS;
  const fixedNonReceiver = selectedMyUser.fixed_non_receiver;
  const [epochBio, setEpochBio] = useState('');
  const [nonReceiver, setNonReceiver] = useState(false);

  const [teammatesChanged, setTeammatesChanged] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { data, isLoading, isIdle, isStale, isRefetching } = useQuery(
    ['teammates', selectedCircle.id],
    () => getTeammates(selectedCircle.id, address as string),
    {
      enabled: !!(selectedCircle.id && address),
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  useDeepChangeEffect(() => {
    // not confident about this
    const tm = startingTeammates ?? [];
    setLocalTeammates(tm);
    console.log('ULG.selectedMyUser.teammates');
    updateLocalGifts(tm);
  }, [selectedMyUser.teammates]);

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
  const usersMap = useRecoilValue(rUsersMap);

  const [localTeammates, setLocalTeammates] = useState<
    NonNullable<typeof startingTeammates>
  >([]);

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

  const { allUsers, startingTeammates } = data || { allUsers: [] };

  useEffect(() => {
    if (!isLoading && !isIdle && !isStale && data?.startingTeammates) {
      setLocalTeammates(data?.startingTeammates);
    }
  }, [data, isLoading, isIdle, isStale]);

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

  useEffect(() => {
    if (isLoading || isIdle) return;
    setTeammatesChanged(
      !isEqual(
        localTeammates.map(u => u.id),
        startingTeammates?.map(u => u.id)
      )
    );
  }, [startingTeammates, localTeammates, isLoading, isIdle]);

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

  useEffect(() => {
    if (selectedMyUser) {
      setEpochBio(selectedMyUser?.bio ?? '');
      setNonReceiver(selectedMyUser.non_receiver);
    }
  }, [selectedMyUser]);

  // TODO: does this work? no useEffect
  const epochDirty =
    selectedMyUser?.bio !== epochBio ||
    selectedMyUser.non_receiver !== nonReceiver;

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

  const handleSaveEpoch = async () => {
    try {
      await updateMyUser({
        bio: epochBio,
        non_receiver: nonReceiver,
        epoch_first_visit: false,
      });

      if (!(!selectedCircle.team_selection && !epochIsActive)) {
        const _nextStep = !selectedCircle.team_selection
          ? STEP_ALLOCATION
          : STEP_MY_TEAM;
        setActiveStep(_nextStep.key);
        navigate(_nextStep.path);
      }
    } catch (e) {
      console.warn('handleSaveEpoch', e);
    }
  };

  const handleSaveAllocations = async () => {
    try {
      await saveGifts();
    } catch (e) {
      console.warn('handleSaveAllocations', e);
    }
  };

  const getHandleStep = (step: IAllocationStep) => () => {
    navigate(step.path);
    setActiveStep(step.key);
  };

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

  if (isLoading || isIdle || isRefetching)
    return <LoadingModal visible text={'Loading Teammates'} />;

  return (
    <div className={classes.root}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        classes={{ root: classes.stepperRoot }}
      >
        {allSteps.map(step => (
          <Step key={step.key} classes={{ root: classes.stepRoot }}>
            <StepButton
              onClick={getHandleStep(step)}
              completed={completedSteps.has(step)}
              disabled={
                (step === STEP_ALLOCATION && !epochIsActive) ||
                (!selectedCircle.team_selection && step === STEP_MY_TEAM)
              }
            >
              {step.buildLabel(selectedCircle)}
            </StepButton>
          </Step>
        ))}
        <ApeInfoTooltip>
          Reward your teammates in the circle by sending them{' '}
          {selectedCircle.tokenName} tokens.{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.coordinape.com/welcome/gift_circle#the-gift-circle"
          >
            Learn More
          </a>
        </ApeInfoTooltip>
      </Stepper>

      <div className={classes.body}>
        {selectedMyUser && activeStep === 0 && (
          <>
            <AllocationEpoch
              epochBio={epochBio}
              setEpochBio={setEpochBio}
              nonReceiver={nonReceiver}
              setNonReceiver={setNonReceiver}
              fixedNonReceiver={fixedNonReceiver}
            />
            <div className={classes.buttonContainer}>
              {epochDirty ? (
                <Button size="large" color="alert" onClick={handleSaveEpoch}>
                  Save Epoch Settings
                </Button>
              ) : (
                <Button
                  size="large"
                  color="alert"
                  disabled={!selectedCircle.team_selection && !epochIsActive}
                  onClick={getHandleStep(
                    !selectedCircle.team_selection
                      ? STEP_ALLOCATION
                      : STEP_MY_TEAM
                  )}
                >
                  Continue With Current Settings
                </Button>
              )}
            </div>
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
            />
            <div className={classes.balanceContainer}>
              <p className={classes.balanceDescription}>
                {tokenRemaining} {selectedCircle.tokenName}
              </p>
              <p className={classes.balanceDescription}>
                &nbsp;left to allocate
              </p>
              <IconButton
                size="small"
                className={classes.rebalanceButton}
                onClick={rebalanceGifts}
                disabled={tokenRemaining === 0}
              >
                <BalanceIcon />
              </IconButton>
            </div>
            <div className={classes.buttonContainer}>
              {localGiftsChanged && (
                <Button
                  size="large"
                  color="alert"
                  onClick={handleSaveAllocations}
                  disabled={tokenRemaining < 0}
                >
                  Save Allocations
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllocationPage;
