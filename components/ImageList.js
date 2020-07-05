import React from "react";
import { theme } from "../utils/theme";

import { FlatList, StyleSheet, Image, View, Text } from "react-native";

const ImageList = ({ results }) => {
  const parsed = JSON.parse(results);
  return (
    <View style={styles.listContainer}>
      {parsed.length ? (
        <FlatList
          data={parsed}
          numColumns={3}
          renderItem={({ item }) => (
            <Image
              resizeMode="stretch"
              key={`id${item.id}`}
              source={{ uri: item.previewURL }}
              style={styles.image}
            />
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
