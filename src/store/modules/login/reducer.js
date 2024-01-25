import {
  LOGIN_REQUEST,
  LOGIN_TOKEN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUESTED,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAIL,
} from "./types";

const INITIAL_STATE = {
  loginData: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_TOKEN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.data,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    //LOGOUT
    case LOGOUT_REQUESTED:
      return {
        ...state,
        // isBusy: true,
        loginData: null,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        // isBusy: false,
        loginData: null,
        fcmToken: state.fcmToken,
      };
    case LOGOUT_REQUEST_FAIL:
      return {
        ...state,
        // isBusy: false,
        loginData: null,
      };
    default:
      return state;
  }
};
