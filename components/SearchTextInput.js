import React from "react";
import { TextInput } from "react-native";
import styles from "../utils/appStyles";
import { theme } from "../utils/theme";
import { connect } from "react-redux";
import { changeSearchTextInput } from "../redux/actions";

// The SearchTextInput dispatches an action to the redux store whenever the user updates the text input
const SearchTextInput = ({ dispatch }) => {
  return (
    <TextInput
      onChangeText={(text) => dispatch(changeSearchTextInput(text))}
      placeholder="Example: Trees"
      // this is the max length for the pixabay API
      maxLength={100}
      selectionColor={theme.colors.primary}
      clearButtonMode="while-editing"
      style={[styles.searchTextInput, styles.margin, styles.roundedBorder]}
    ></TextInput>
  );
};
export default connect()(SearchTextInput);
