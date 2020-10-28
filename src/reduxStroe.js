import { combineReducers, createStore } from 'redux';
import counter from './counter/redux';

// counter: counter equal counter
const stroe = createStore(
  combineReducers({
    counter,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default stroe;