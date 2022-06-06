/* eslint-disable no-console */

import React from 'react';

import { makeStyles, Stepper, Step, StepButton } from '@material-ui/core';

import { ApeInfoTooltip } from 'components';
import { useSelectedCircle } from 'recoilState/app';
import { STEP_MY_TEAM, STEP_ALLOCATION } from 'routes/allocation';

import { IAllocationStep } from 'types';

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
}));

type AllocationPageProps = {
  getHandleStep: (step: IAllocationStep) => () => void;
  children: React.ReactNode;
  activeStep: number;
  allSteps: IAllocationStep[];
  completedSteps: Set<IAllocationStep>;
};

export const AllocationPage = ({
  children,
  getHandleStep,
  activeStep,
  allSteps,
  completedSteps,
}: AllocationPageProps) => {
  const classes = useStyles();
  const {
    circle: selectedCircle,
    circleEpochsStatus: { epochIsActive },
  } = useSelectedCircle();

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

      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default AllocationPage;
