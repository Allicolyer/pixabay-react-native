import React from "react";
import { Text, TouchableOpacity, Keyboard } from "react-native";
import { updateSearchResults } from "../redux/actions";
import { connect } from "react-redux";
import styles from "../style/appStyles";
import { pixabayAPICall } from "../utils/helpers";
import store from "../redux/store";

// The SearchButton calls the pixabayAPI and dispatches the updateSearchResults action to the redux stores
const SearchButton = ({ dispatch }) => (
  <TouchableOpacity
    style={[styles.margin, styles.button]}
    onPress={async () => {
      //dismiss the keyboard
      Keyboard.dismiss();
      //dispatch updated search results to redux
      dispatch(
        updateSearchResults(
          await pixabayAPICall(store.getState().searchTextInput)
        )
      );
    }}
  >
    <Text style={styles.buttonText}>Search</Text>
  </TouchableOpacity>
);

export default connect()(SearchButton);
