import React from "react";
import { TextInput } from "react-native";
import styles from "../style/appStyles";
import { theme } from "../style/theme";
import { connect } from "react-redux";
import { changeSearchTextInput } from "../redux/actions";
import PropTypes from "prop-types";

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

SearchTextInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchTextInput);
