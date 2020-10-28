import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './counter/redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// counter: counter equal counter
const stroe = createStore(
  combineReducers({
    counter,
  }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default stroe;