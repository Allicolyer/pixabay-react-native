import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { theme } from "../utils/theme";
import { connect } from "react-redux";
import { changeInputText } from "../redux/actions";

const SearchTextInput = ({ dispatch }) => {
  return (
    <TextInput
      onChangeText={(text) => dispatch(changeInputText(text))}
      placeholder="Example: Trees"
      // this is the max length for the pixabay API
      maxLength={100}
      selectionColor={theme.colors.primary}
      clearButtonMode="while-editing"
      style={[styles.textInput, styles.margin]}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
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

export default connect()(SearchTextInput);
