import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { theme } from "./utils/theme";
import NavBar from "./components/NavBar";
import SearchScreen from "./components/SearchScreen";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <NavBar />
        <SearchScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: Constants.statusBarHeight,
    fontFamily: theme.fontStack,
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
  },
});
