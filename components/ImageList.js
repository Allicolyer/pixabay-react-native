import React from "react";
import styles from "../utils/appStyles";
import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";

const ImageList = ({ navigation, results, screenOrientation }) => {
  const parsed = JSON.parse(results);

  return (
    <View style={styles.marginVertical}>
      {parsed.length ? (
        <FlatList
          key={screenOrientation}
          data={parsed}
          numColumns={screenOrientation === "portrait" ? 3 : 5}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                /* Navigate to the Details route and pass in the image */
                navigation.navigate("Details", {
                  image: item,
                });
              }}
            >
              <Image
                resizeMode="stretch"
                key={`id${item.id}`}
                source={{ uri: item.previewURL }}
                style={[styles.roundedBorder, styles.margin, styles.smallImage]}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={[styles.centerText, styles.primaryText]}>
          No results found
        </Text>
      )}
    </View>
  );
};

export default ImageList;
