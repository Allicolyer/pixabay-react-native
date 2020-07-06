import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../utils/theme";
import ImageListContainer from "../containers/ImageListContainer";
import SearchTextInput from "./SearchTextInput";
import SearchButton from "./SearchButton";

const SearchScreen = ({ navigation }) => (
  <View style={styles.contentContainer}>
    <Text style={styles.headerText}>Search for images on Pixabay</Text>
    <View style={styles.searchContainer}>
      <SearchTextInput />
      <SearchButton />
    </View>
    <View style={styles.resultsContainer}>
      <ImageListContainer navigation={navigation} />
    </View>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
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

export default SearchScreen;
