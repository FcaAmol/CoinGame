import { NavigationAction } from "@react-navigation/native";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_TOKEN_REQUEST,
  LOGIN_FAIL,
  LOGOUT_REQUESTED,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAIL,
} from "./types";

export const loginRequest = (data, navigation) => ({
  type: LOGIN_REQUEST,
  data,
  navigation,
});

export const loginTokenRequest = (data, navigation) => ({
  type: LOGIN_TOKEN_REQUEST,
  data,
  navigation,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
export const loginFail = () => ({
  type: LOGIN_FAIL,
});
export const logoutRequest = (navigation) => ({
  type: LOGOUT_REQUESTED,
  navigation,
});
export const logoutSuccess = (data) => ({
  type: LOGOUT_REQUEST_SUCCESS,
  data,
});
export const logoutFail = () => ({
  type: LOGOUT_REQUEST_FAIL,
});
