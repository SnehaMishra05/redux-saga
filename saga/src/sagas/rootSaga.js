import { all } from "redux-saga/effects";
import { watchAsyncIncrement } from "./counterSaga";

export default function* rootSaga() {
  yield all([watchAsyncIncrement()]);
}
