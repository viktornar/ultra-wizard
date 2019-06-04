import {STATE_STARTED} from './constants'

export const historyRecord = (instance, history) => {
  const score = instance.calcScore(history.givenAnswers);
  // Add current score to history for debugging.
  const historyWithScore = {...history, ...{score}};

  if (instance.isDebugging()) {
    console.group('historyRecord');
    for (const property in historyWithScore) {
      console.log(property, historyWithScore[property])
    }
    console.groupEnd('historyRecord')
  }

  // "Record actions" by adding element to history.
  instance.setState({history: [...instance.state.history, historyWithScore]})
};

export const historyGoBack = (instance) => {
  let history = [...instance.state.history];
  // Skip last entry because we go back in time.
  history.pop();
  // If history is totally emptied
  // make sure that its set to test start (step 1).
  history = history.length ? history : STATE_STARTED;
  // Get last entry from history (which was the previous user choice).
  const formerHistoryElement = history[history.length - 1];

  if (instance.isDebugging()) {
    console.group('historyGoBack');
    for (const property in formerHistoryElement) {
      console.log(property, formerHistoryElement[property]);
    }
    console.groupEnd('historyGoBack')
  }

  // Delete score from state object.
  // We dont want to set it in state
  // since application handles that in calcScore().
  const {score, ...historyElementWithoutScore} = formerHistoryElement;

  // Rewind both history and state to previous step.
  instance.setState({...{history}, ...historyElementWithoutScore})
};
