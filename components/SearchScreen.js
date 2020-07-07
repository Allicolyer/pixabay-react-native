import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styles from "../utils/appStyles";
import ImageListContainer from "../containers/ImageListContainer";
import SearchTextInput from "./SearchTextInput";
import SearchButton from "./SearchButton";

const SearchScreen = ({ navigation }) => (
  <View style={[styles.flexColumn, styles.flexOne, styles.margin]}>
    <Text style={[styles.centerText, styles.headerText]}>
      Search for images on Pixabay
    </Text>
    <View style={[styles.marginHorizontal, styles.flexRow]}>
      <SearchTextInput />
      <SearchButton />
    </View>
    <View style={[styles.flexRow, styles.marginHorizontal]}>
      <ImageListContainer navigation={navigation} />
    </View>
    <StatusBar style="auto" />
  </View>
);

export default SearchScreen;
