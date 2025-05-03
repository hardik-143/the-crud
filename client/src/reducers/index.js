// src/store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"], // only persist auth reducer
  version: 1,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

export default rootReducer;
