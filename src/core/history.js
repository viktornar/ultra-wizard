import {STATE_STARTED} from './constants'

export const historyRecord = (instance, history) => {
  instance.setState({history: [...instance.state.history, {...history}]})
};

export const historyGoBack = (instance) => {
  let history = [...instance.state.history];
  history.pop();
  history = history.length ? history : STATE_STARTED;
  const formerHistoryElement = history[history.length - 1];
  const {...historyElementWithoutScore} = formerHistoryElement;
  instance.setState({...{history}, ...historyElementWithoutScore})
};
