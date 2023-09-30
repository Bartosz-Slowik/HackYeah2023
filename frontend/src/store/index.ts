import { AnyAction, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import reportsSlice from "./reports-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    reports: reportsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;
export default store;
