import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './slice/alertSlice';
import userSlice from './slice/userSlice';

export const store = configureStore({
  reducer: {
    userState: userSlice,
    alertsState: alertSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})