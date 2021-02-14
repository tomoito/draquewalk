/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dqwolkSlice from '../slices/draque';

export const store = configureStore({
  reducer: {
    draque: dqwolkSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
