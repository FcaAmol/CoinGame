import { combineReducers } from "redux";
import loginReducer from "./modules/login/reducer";

const appReducer = combineReducers({
  loginReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_REQUESTED") {
    let fcmToken;
    Object.keys(state).forEach((key) => {
      if (key == "loginReducer") {
        fcmToken = state[key].fcmToken;
      }
      storage.removeItem(`persist:${key}`);
    });
    state = Object.assign(
      {},
      {
        ...initialState,
        loginReducer: { ...initialState.loginReducer },
      }
    );
  }
  return appReducer(state, action);
};

export default rootReducer;
