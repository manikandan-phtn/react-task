import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ProductList from "../screen/ProductListScreen";
import ProductSearch from "../screen/ProductSearchScreen";
import { FontAwesome } from "@expo/vector-icons";

const stack1 = createStackNavigator(
  {
    Main: ProductList
    //Detail: ProductSearch
  },
  {
    navigationOptions: {
      headerTitle: "Product List",
      headerStyle: {
        backgroundColor: "#075e54"
      },
      headerTintColor: "#fff"
    }
  }
);

const stack2 = createStackNavigator(
  {
    Main: ProductSearch,
    Detail: ProductSearch
  },
  {
    navigationOptions: {
      headerTitle: "Product Search",
      headerStyle: {
        backgroundColor: "#075e54"
      },
      headerTintColor: "#fff"
    }
  }
);

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: stack1,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
    }
  },
  Search: {
    screen: stack2,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: <FontAwesome name="search" size={25} color="red" />
    }
  }
});

export default AppNavigator;
