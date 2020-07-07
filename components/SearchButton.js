import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { search } from "../redux/actions";
import { connect } from "react-redux";
import styles from "../utils/appStyles";
import pixabayAPICall from "../utils/pixabayAPICall";

const SearchButton = ({ dispatch }) => (
  <TouchableOpacity
    style={[styles.margin, styles.button]}
    onPress={async () => dispatch(search(await pixabayAPICall()))}
  >
    <Text style={styles.buttonText}>Search</Text>
  </TouchableOpacity>
);

export default connect()(SearchButton);
