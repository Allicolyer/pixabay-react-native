import React from "react";
import styles from "../style/appStyles";
import ImageList from "./ImageList";
import { View, Text } from "react-native";

// The SearchResults Component displays either an ImageList or text showing no results
const SearchResults = ({ navigation, results, screenWidth }) => {
  //parse the results
  const parsed = results ? JSON.parse(results) : [];
  return (
    <View style={[styles.flexOne, styles.margin]}>
      {/* if there are any search results render the ImageList */}
      {parsed.length ? (
        <ImageList
          navigation={navigation}
          parsed={parsed}
          screenWidth={screenWidth}
        />
      ) : (
        <Text style={styles.infoText}>
          {/* If results is null, tell user to enter text to get started, otherwise there are no results */}
          {results ? "No results found" : "Enter text to get started"}
        </Text>
      )}
    </View>
  );
};

export default SearchResults;
