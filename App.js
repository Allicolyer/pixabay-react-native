import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Constants from "expo-constants";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { theme } from "./utils/theme";
import ImageListContainer from "./containers/ImageListContainer";
import SearchTextInput from "./components/SearchTextInput";
import SearchButton from "./components/SearchButton";
import NavBar from "./components/NavBar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <NavBar />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Search for images on Pixabay</Text>
          <View style={styles.searchContainer}>
            <SearchTextInput />
            <SearchButton />
          </View>
          <View style={styles.resultsContainer}>
            <ImageListContainer />
          </View>
          <StatusBar style="auto" />
        </View>
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
  contentContainer: {
    margin: theme.space[1],
    flexDirection: "column",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    marginVertical: theme.space[2],
    color: theme.colors.primary,
    fontSize: theme.fontSizes[3],
    textAlign: "center",
  },
  resultsContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    marginVertical: theme.space[1],
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
