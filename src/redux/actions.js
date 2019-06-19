import { HISTORY_BACK, HISTORY_RECORD, START_WIZARD } from './actionTypes';
import { STATE_STARTED } from '../core/constants';

export const startWizard = () => ({
  type: START_WIZARD,
  payload: STATE_STARTED
});

export const historyBack = () => ({
  type: HISTORY_BACK
});

export const historyRecord = answer => ({
  type: HISTORY_RECORD,
  payload: answer
});
