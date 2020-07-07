import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchScreen from "./SearchScreen";
import DetailsScreenContainer from "../containers/DetailsScreenContainer";
import { assessScreenOrientation } from "../utils/helpers";
import { changeScreenOrientation } from "../redux/actions";
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
      changeScreenOrientation(
        assessScreenOrientation(window.width, window.height)
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
        <Stack.Screen name="Details" component={DetailsScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect()(Content);
