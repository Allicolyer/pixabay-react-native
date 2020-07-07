import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchScreen from "./SearchScreen";
import DetailsScreen from "./DetailsScreen";
import { findScreenOrientation } from "../utils/helpers";
import { screenOrientationChange } from "../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";

//window object to get screen orienation
const window = Dimensions.get("window");
//stack object for the navigator
const Stack = createStackNavigator();

const Content = ({ dispatch }) => {
  //change event listener for screen orientation change
  const onChange = ({ window }) => {
    dispatch(
      screenOrientationChange(
        findScreenOrientation(window.width, window.height)
      )
    );
  };

  //add event listener to the component when it loads
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect()(Content);
