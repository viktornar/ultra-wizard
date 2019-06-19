import {STATE_STARTED} from './constants'

export const historyRecord = (instance, history) => {
  instance.setState({history: [...instance.state.history, {...history}]})
};

export const historyGoBack = (instance) => {
  let history = [...instance.state.history];
  history.pop();
  history = history.length ? history : STATE_STARTED;
  const lastHistoryElement = history[history.length - 1];
  instance.setState({...{history}, ...lastHistoryElement})
};
