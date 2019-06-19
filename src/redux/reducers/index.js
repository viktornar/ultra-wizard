import { combineReducers } from 'redux';
import {
  HISTORY_RECORD,
  HISTORY_BACK,
  START_WIZARD
} from '../actionTypes';

const initialState = {
  showIntro: true,
  givenAnswers: [],
};

function wizard(state = initialState, action) {
  switch (action.type) {
    case START_WIZARD:
      return { ...initialState, showIntro: false };
    case HISTORY_RECORD:
     return { ...action.payload  };
    case HISTORY_BACK:
      let { givenAnswers } = state;
      givenAnswers.pop();
      return { ...state, givenAnswers };
    default:
      return state;
  }
}

export default combineReducers({ wizard });
