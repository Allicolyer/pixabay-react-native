import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import pixabayAPICall from "./utils/pixabayAPICall";
import { theme } from "./utils/theme";
import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  return (
    <View style={styles.appContainer}>
      <NavBar />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Search for images on Pixabay</Text>
        <View style={styles.searchContainer}>
          <TextInput
            onChangeText={(text) => setText(text)}
            placeholder="Example: Trees"
            // this is the max length for the pixabay API
            maxLength={100}
            selectionColor={theme.colors.primary}
            clearButtonMode="while-editing"
            onSubmitEditing={async () =>
              setSearchResults(await pixabayAPICall(text))
            }
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => setSearchResults(await pixabayAPICall(text))}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultsContainer}>
          {searchResults && (
            <ImageList results={JSON.stringify(searchResults)} />
          )}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
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
  button: {
    width: 100,
    backgroundColor: theme.colors.primary,
    padding: theme.space[2],
    borderRadius: theme.radii[0],
    marginHorizontal: theme.space[1],
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: "center",
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
  //textInput can't be styled with flexbox
  textInput: {
    width: 200,
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: theme.radii[0],
    marginHorizontal: theme.space[1],
    paddingHorizontal: theme.space[1],
  },
});
