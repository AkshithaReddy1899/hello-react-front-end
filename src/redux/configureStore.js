import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { greetingsReducer } from './greeting';

const rootReducer = combineReducers({ greeting: greetingsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
