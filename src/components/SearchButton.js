import React from "react";
import { Text, TouchableOpacity, Keyboard } from "react-native";
import {
  updateSearchResults,
  updatePositionInImageList,
} from "../redux/actions";
import { connect } from "react-redux";
import styles from "../style/appStyles";
import { paginatedPixabayAPICall } from "../utils/helpers";
import store from "../redux/store";
import PropTypes from "prop-types";

// The SearchButton calls the pixabayAPI and dispatches the updateSearchResults action to the redux stores
const SearchButton = ({ dispatch }) => (
  <TouchableOpacity
    style={[styles.margin, styles.button]}
    onPress={async () => {
      //dismiss the keyboard
      Keyboard.dismiss();
      //reset the position in the imageList
      dispatch(updatePositionInImageList(0));
      //dispatch updated search results to redux
      dispatch(
        updateSearchResults(
          await paginatedPixabayAPICall(store.getState().searchTextInput)
        )
      );
    }}
  >
    <Text style={styles.buttonText}>Search</Text>
  </TouchableOpacity>
);

SearchButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchButton);
