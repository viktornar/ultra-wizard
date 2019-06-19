import {
  STEP_NEXT,
  STEP_BACK,
  START_WIZARD
} from '../actionTypes';

export const initialState = {
  showIntro: true,
  givenAnswers: [],
};

export default function wizard(state = initialState, action) {
  switch (action.type) {
    case START_WIZARD:
      return { ...initialState, showIntro: false };
    case STEP_NEXT:
      const { answer } = action.payload;
      return { ...state, givenAnswers: [...state.givenAnswers, answer] };
    case STEP_BACK:
      let { givenAnswers } = state;
      givenAnswers.pop();
      return { ...state, givenAnswers };
    default:
      return state;
  }
}
