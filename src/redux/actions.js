import {HISTORY_BACK, HISTORY_RECORD} from './actionTypes';

export const historyBack = content => ({
  type: HISTORY_BACK,
  payload: {}
});

export const historyRecord = id => ({
  type: HISTORY_RECORD,
  payload: {}
});
