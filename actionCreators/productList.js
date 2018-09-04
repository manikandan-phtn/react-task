import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  GET_PRODICT_DATA,
  PRODUCT_SUCCESS_DATA,
  PRODUCT_FAIL_DATA,
  SEARCH_PRODUCT_DATA,
  PRODUCT_SEARCH_DATA
} from "../actionTypes/productList";

export const requestApiData = () => ({
  type: REQUEST_API_DATA
});

export const receiveApiData = products => ({
  type: RECEIVE_API_DATA,
  products
});

export const productSearchData = (searchText, products) => ({
  type: PRODUCT_SEARCH_DATA,
  searchText,
  products
});

export function getProducts() {
  return {
    type: GET_PRODICT_DATA
  };
}

export function getProductSuccess(searchText) {
  return {
    type: PRODUCT_SUCCESS_DATA,
    searchText
  };
}

export function getProductFail(error) {
  return {
    type: PRODUCT_FAIL_DATA,
    error
  };
}

export function getSearchData(text) {
  return {
    type: SEARCH_PRODUCT_DATA,
    text
  };
}
