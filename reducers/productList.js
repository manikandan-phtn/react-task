import {
  GET_PRODICT_DATA,
  PRODUCT_SUCCESS_DATA,
  PRODUCT_FAIL_DATA,
  SEARCH_PRODUCT_DATA
} from "../actionTypes/productList";

export default (
  initState = {
    products: [],
    isLoding: true,
    text: ""
  },
  action
) => {
  //console.log(action.type);
  switch (action.type) {
    case GET_PRODICT_DATA:
      return { ...initState, isLoding: true };
    case PRODUCT_SUCCESS_DATA:
      return { ...initState, isLoding: false, products: action.products };
    case PRODUCT_FAIL_DATA:
      return { ...initState, isLoding: true, error: action.error };
    case SEARCH_PRODUCT_DATA:
      console.log(action.text);
      return { ...initState, isLoding: true, text: action.text };
    default:
      return initState;
  }
};
