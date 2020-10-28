import { combineReducers, createStore } from 'redux';
import counter from './counter/redux';

// counter: counter equal counter
const stroe = createStore(
  combineReducers({
    counter,
  })
)

export default stroe;