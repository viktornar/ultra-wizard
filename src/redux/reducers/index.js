import { combineReducers } from 'redux';
import {HISTORY_RECORD, HISTORY_BACK} from "../actionTypes";


const initialState = {

};

function wizard(state = initialState, action) {
  switch (action.type) {
    case HISTORY_RECORD:
    case HISTORY_BACK:
    default:
      return state;
  }
}

export default combineReducers({ wizard });
