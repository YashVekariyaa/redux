import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import AgencyReducer from './Reducers/AgencyReducer';
const rootReducer = combineReducers({
  Agency: AgencyReducer,
});

const initialState = {};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.dispatch({ type: 'INIT' });

export default store;
