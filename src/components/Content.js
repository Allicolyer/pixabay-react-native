import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchScreen from "../screens/SearchScreen";
import DetailsScreenContainer from "../containers/DetailsScreenContainer";
import { calculateScreenOrientation } from "../utils/helpers";
import { changeScreenDimensions } from "../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import { theme } from "../style/theme";
import PropTypes from "prop-types";

//The Content component renders the main logic of the app and listens for changes in screen orientation
const Content = ({ dispatch }) => {
  //window object to get screen orientation
  const window = Dimensions.get("window");
  //stack object for the navigator
  const Stack = createStackNavigator();

  //Change function for screen orientation
  const onChange = ({ window }) => {
    dispatch(
      changeScreenDimensions(
        window.width,
        window.height,
        calculateScreenOrientation(window.width, window.height)
      )
    );
  };

  //Event listener is added when this component
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontWeight: theme.fontWeights[2],
            fontStyle: theme.fontStyle,
          },
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Content);
