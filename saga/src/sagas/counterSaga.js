import { delay, put, takeEvery } from "redux-saga/effects";
import { incrementBy } from "../features/counterSlice";

function* asyncIncrement() {
  yield delay(1000); // Wait 1 second
  yield put(incrementBy(1));
}

export function* watchAsyncIncrement() {
  yield takeEvery("counter/asyncIncrement", asyncIncrement);
}
