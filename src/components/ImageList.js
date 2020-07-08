import React from "react";
import styles from "../style/appStyles";
import store from "../redux/store";
import { calculateImageListColumns } from "../utils/helpers";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";

// The ImageList Component displays all images from a user's search
const ImageList = ({ navigation, results, screenOrientation }) => {
  //if there are results, parse them before they can be rendered in the FlatList component, otherwise set parsed to an empty array
  const parsed = results ? JSON.parse(results) : [];
  //calculate the number of columns
  const numofColumns = calculateImageListColumns(16);

  return (
    <View style={[styles.flexOne]}>
      {/* if there are any search results render the Flatlist */}
      {parsed.length ? (
        <FlatList
          //this rerenders the flatList every time there is a change in the screen orientation
          key={screenOrientation}
          data={parsed}
          // the number of columns changes based on the screen orientation
          numColumns={numofColumns}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                // navigate to the Details route and pass in the image
                navigation.navigate("Details", {
                  image: item,
                });
              }}
            >
              <Image
                resizeMode="cover"
                key={`id${item.id}`}
                source={{ uri: item.previewURL }}
                style={[styles.roundedBorder, styles.imageThumbnail]}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        //If there are no search results
        <View>
          <Text style={[styles.centerText, styles.primaryText]}>
            {/* If there are no results is null, tell user to enter text to get started, otherwise there are no results */}
            {results ? "No results found" : "Enter text to get started"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ImageList;
