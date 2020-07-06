import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../utils/theme";
import { search } from "../redux/actions";
import { connect } from "react-redux";
import store from "../redux/store";
import pixabayAPICall from "../utils/pixabayAPICall";

const apiCall = async () => {
  return pixabayAPICall(store.getState().inputText).then((res) => {
    return res;
  });
};

const SearchButton = ({ dispatch }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={async () => dispatch(search(await apiCall()))}
  >
    <Text style={styles.buttonText}>Search</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
});

export default connect()(SearchButton);
