import { createSlice } from '@reduxjs/toolkit';
import { Mode } from './types';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const initialState: Mode = {
  mode: Theme.Light,
};

const themeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setTheme: (state, { payload }): void => {
      state.mode = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
