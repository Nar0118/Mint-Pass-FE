import { combineReducers } from 'redux';
import themeSlice from './theme/themeSlice';
import userSlice from './user/userSlice';

export const rootReducer = combineReducers({
  themeSlice: themeSlice,
  userSlice: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
