import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styles from "../style/appStyles";
import ImageListContainer from "../containers/ImageListContainer";
import SearchTextInput from "../components/SearchTextInput";
import SearchButton from "../components/SearchButton";

// The SearchScreen renders the SearchTextInput and SearchButton ImageList components
const SearchScreen = ({ navigation }) => (
  <View style={[styles.flexColumn, styles.flexOne, styles.margin]}>
    <Text style={styles.headerText}>Search for Images on Pixabay</Text>
    <View style={[styles.marginHorizontal, styles.flexRow]}>
      <SearchTextInput />
      <SearchButton />
    </View>
    <ImageListContainer navigation={navigation} />
    <StatusBar style="auto" />
  </View>
);

export default SearchScreen;
