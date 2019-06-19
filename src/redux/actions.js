import { HISTORY_BACK, HISTORY_RECORD, START_WIZARD } from './actionTypes';

export const startWizard = () => ({
  type: START_WIZARD,
});

export const historyBack = () => ({
  type: HISTORY_BACK
});

export const historyRecord = answer => ({
  type: HISTORY_RECORD,
  payload: answer
});
