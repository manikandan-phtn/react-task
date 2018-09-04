import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  Button
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProducts, getSearchData } from "../actionCreators/productList";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.productList = [];
  }

  componentDidMount(text) {
    console.log(text);
    this.props.actions.getProducts();
  }

  _onProductSearch = text => {
    this.props.actions.getSearchData(text);
  };

  render() {
    //console.log(this.props);
    return (
      <View>
        {/* <Button title="test" onPress={this._onProductSearch} /> */}
        <TextInput placeholder="Search" onChangeText={this._onProductSearch} />
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.productList.products,
//   isLoding: state.productList.isLoding
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getProducts, getSearchData }, dispatch);

function mapStateToProps(state) {
  return {
    products: state.productList.products,
    isLoding: state.productList.isLoding,
    text: state.productList.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProducts, getSearchData }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
