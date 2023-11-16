import { configureStore, AnyAction, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from 'store';

const middleware = [thunk, logger];

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  return store;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrapper = createWrapper<Store<any, AnyAction>>(makeStore);
export default makeStore;
