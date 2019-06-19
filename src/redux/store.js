import { createStore } from 'redux';
import rootReducer from './reducers';

console.log(process.env.ENVIRONMENT);

export default createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
