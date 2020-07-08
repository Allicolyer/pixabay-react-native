import React from "react";
import styles from "../style/appStyles";
import { calculateImageListColumns } from "../utils/helpers";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";

// The ImageList Component displays all images from a user's search
const ImageList = ({ navigation, results, screenOrientation }) => {
  //results need to be parsed before they can be rendered in the FlatList component
  const parsed = JSON.parse(results);
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
        <Text style={[styles.centerText, styles.primaryText]}>
          No results found
        </Text>
      )}
    </View>
  );
};

export default ImageList;
