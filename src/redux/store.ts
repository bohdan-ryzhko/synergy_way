import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companiesReducer } from "./companies";

export const reducer = combineReducers({
  companies: companiesReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
