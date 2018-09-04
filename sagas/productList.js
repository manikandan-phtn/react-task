import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, GET_PRODICT_DATA } from "../actionTypes/productList";
import {
  receiveApiData,
  getProductSuccess,
  getProductFail
} from "../actionCreators/productList";
import { fatchData } from "../api/api";

function* getProductData(action) {
  try {
    let product = yield fetch("https://api.myjson.com/bins/87lgk").then(r =>
      r.json()
    );
    yield put(getProductSuccess(product));
  } catch (error) {
    yield put(getProductFail(error));
  }
}

function* getApiData(action) {
  try {
    const products = yield call(fatchData);
    yield put(receiveApiData(products));
  } catch (e) {
    console.log(e);
  }
}

export default function* productSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(GET_PRODICT_DATA, getProductData);
}
