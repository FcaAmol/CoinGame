import { takeEvery, put, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGOUT_REQUESTED, LOGIN_TOKEN_REQUEST } from "./types";
import { loginFail, loginSuccess, logoutSuccess, logoutFail } from "./actions";
import { showLoader, showToast, hideLoader } from "../../../Constants/Methods";
import Config, { SUCCESS } from "../../../Config/Config";
import { Request } from "../../../Services";
import { userSuccess } from "../user/actions";
import { featuredPostRequest } from "../featuredPosts/actions";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
function* onLoginRequested({ data, navigation }) { 
  try {
    
  } catch (error) {
    yield* hideLoader(false, "");
    showToast(error.message, "danger");
    yield put(loginFail());
  }
}


function* onLogoutRequested({ navigation }) {
  yield* showLoader(true, "");

  try {
    // yield put(profileSuccess(null));
    yield put(loginSuccess(null));
    yield put(logoutSuccess(null));
    // navigation.navigate("Login");
    // yield put(onboardingSuccess(null));
    
  } catch (error) {
    
    yield* hideLoader(false, "");
    showToast(error.message, "danger");
  }
}

function* sagaLogin() {
  yield takeEvery(LOGIN_REQUEST, onLoginRequested);
  yield takeEvery(LOGOUT_REQUESTED, onLogoutRequested);
}
export default sagaLogin;
