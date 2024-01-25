import { createStore, compose, applyMiddleware } from "redux";
//import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import createSagaMiddleware from "redux-saga";
//import logger from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import Config from "../Config/Config";
import reducers from "./reducers";
import rootSaga from "./sagas";

/**
 * Create Axios Client to communicate
 *
 */

const axiosClient = axios.create({
  baseURL: Config.API_URL,
  responseType: "json",
});

// Store instance
let store = null;
let persistor = null;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["loadingReducer"],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

/**
 * Create the Redux store
 */
//  const store = configureStore({
//   reducer,
// })
export const configureStore = () => {
  store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, axiosMiddleware(axiosClient))
  );
  sagaMiddleware.run(rootSaga);
  persistor = persistStore(store);
  return { store, persistor };
};

/**
 * Get store
 */
export const getStore = () => store;

/**
 * Get persistor
 */
export const getPersistor = () => persistor;
/**
 * Dispatch an action
 */
export const dispatch = (...args) => store.dispatch(...args);
export default {
  dispatch,
  getStore,
  configureStore,
};
