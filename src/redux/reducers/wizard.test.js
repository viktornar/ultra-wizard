import wizard, { initialState } from './wizard';
import { START_WIZARD, STEP_BACK, STEP_NEXT } from '../actionTypes';

describe('wizard reducer', () => {
  it('should return the initial state', () => {
    expect(wizard(undefined, {})).toEqual(initialState);
  });

  it('should handle START_WIZARD', () => {
    const startActionMock = {
      type: START_WIZARD
    };

    expect(wizard(undefined, startActionMock)).toEqual({ ...initialState, showIntro: false });
  });

  it('should handle STEP_NEXT', () => {
    const nextActionMock = {
      type: STEP_NEXT,
      payload: {
        answer: 'Some answer'
      }
    };

    expect(wizard({ ...initialState, showIntro: false }, nextActionMock))
      .toEqual({
        ...initialState,
        showIntro: false,
        givenAnswers: ['Some answer']
      });
  });

  it('should handle STEP_NEXT', () => {
    const nextActionMock = {
      type: STEP_NEXT,
      payload: {
        answer: 'Some answer'
      }
    };

    expect(wizard({ ...initialState, showIntro: false }, nextActionMock))
      .toEqual({
        ...initialState,
        showIntro: false,
        givenAnswers: ['Some answer']
      });
  });

  it('should handle STEP_BACK', () => {
    const backActionMock = {
      type: STEP_BACK,
    };

    expect(wizard({
      ...initialState,
      showIntro: false,
      givenAnswers: ['Some answer']
    }, backActionMock))
      .toEqual({
        ...initialState,
        showIntro: false,
        givenAnswers: []
      });
  });
});
