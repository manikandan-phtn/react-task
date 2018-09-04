import {
  RECEIVE_API_DATA,
  PRODUCT_SEARCH_DATA
} from "../actionTypes/productList";

export default (
  state = {
    isLoading: true,
    products: [],
    filterData: [],
    searchText: ""
  },
  { type, products, searchText }
) => {
  //console.log("Type=>", type);
  switch (type) {
    case RECEIVE_API_DATA:
      return { ...state, isLoading: false, products: products };
    case PRODUCT_SEARCH_DATA:
      return {
        ...state,
        isLoading: false,
        filterData: products.filter(function(item) {
          return (
            item.title.toLowerCase().search(searchText.toLowerCase()) !== -1
          );
        })
      };
    default:
      return state;
  }
};
