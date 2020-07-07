import React from "react";
import styles from "../style/appStyles";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";

// The ImageList Component displays all images from a user's search
const ImageList = ({ navigation, results, screenOrientation }) => {
  //results need to be parsed before they can be rendered in the FlatList component
  const parsed = JSON.parse(results);

  return (
    <View style={[styles.margin, styles.flexOne]}>
      {/* if there are any search results render the Flatlist */}
      {parsed.length ? (
        <FlatList
          key={screenOrientation}
          data={parsed}
          // the number of columns changes based on the screen orientation
          numColumns={screenOrientation === "portrait" ? 3 : 5}
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
                style={[styles.roundedBorder, styles.margin, styles.smallImage]}
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
