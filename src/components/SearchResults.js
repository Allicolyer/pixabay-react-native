import React from "react";
import styles from "../style/appStyles";
import ImageList from "./ImageList";
import { View, Text } from "react-native";

// The SearchResults Component displays either an ImageList or text showing no results
const SearchResults = ({ navigation, results, totalHits, screenWidth }) => {
  return (
    <View style={[styles.flexOne, styles.margin]}>
      {/* if there are any hits render the ImageList */}
      {totalHits ? (
        <ImageList
          navigation={navigation}
          results={results}
          totalHits={totalHits}
          screenWidth={screenWidth}
        />
      ) : (
        <Text style={styles.infoText}>
          {/* If the totalHits is 0 there are not results, otherwise they have not entered anything */}
          {totalHits === 0 ? "No results found" : "Enter text to get started"}
        </Text>
      )}
    </View>
  );
};

export default SearchResults;
