import { all } from "redux-saga/effects";
import sagaLogin from "./modules/login/saga";

export default function* rootSaga() {
  yield all([sagaLogin()]);
}
