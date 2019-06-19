import { STEP_BACK, STEP_NEXT, START_WIZARD } from './actionTypes';

export const startWizard = () => ({
  type: START_WIZARD,
});

export const prevStep = () => ({
  type: STEP_BACK
});

export const nextStep = answer => ({
  type: STEP_NEXT,
  payload: answer
});
