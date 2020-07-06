import React from "react";
import { theme } from "../utils/theme";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";

const ImageList = ({ navigation, results }) => {
  const parsed = JSON.parse(results);
  return (
    <View style={styles.listContainer}>
      {parsed.length ? (
        <FlatList
          data={parsed}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                /* Navigate to the Details route and pass in the image */
                navigation.navigate("Details", {
                  id: item.id,
                });
              }}
            >
              <Image
                resizeMode="stretch"
                key={`id${item.id}`}
                source={{ uri: item.previewURL }}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.text}> No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginVertical: theme.space[1],
    marginHorizontal: theme.space[1],
    borderRadius: theme.radii[0],
  },
  listContainer: {
    marginVertical: theme.space[1],
  },
  text: {
    color: theme.colors.primary,
    textAlign: "center",
  },
});

export default ImageList;
