import { createStore, applyMiddleware } from 'redux';
//midleware for debigging redux
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const midlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...midlewares));

export default store;
