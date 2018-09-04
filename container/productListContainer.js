import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actionCreators/productList";
import { ProductRenderItem, imageArr } from "../components";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  _productRenderItem({ item: product }) {
    return <ProductRenderItem product={product} />;
  }

  render() {
    const { products, isLoading } = this.props.products;
    products.sort(function(a, b) {
      return b.price - a.price;
    });
    products.map((el, i) => {
      return (el.image = imageArr[i]);
    });
    return (
      <View>
        {isLoading && <ActivityIndicator size="large" color="green" />}
        <FlatList
          data={products}
          keyExtractor={(p, i) => `${p.id}`}
          renderItem={this._productRenderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
