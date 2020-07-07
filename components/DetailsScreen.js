import React from "react";
import { theme } from "../utils/theme";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { image } = route.params;
  return (
    <View>
      <Image
        resizeMode="stretch"
        key={`id${image.id}`}
        source={{ uri: image.webformatURL }}
        style={styles.image}
      />
      <Text>Uploaded By: {image.user}</Text>
      <Text>Tags: {image.tags}</Text>
      <Text>
        Resolution: {image.imageWidth} x {image.imageHeight}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: theme.colors.primary,
    padding: theme.space[2],
    borderRadius: theme.radii[0],
    marginHorizontal: theme.space[1],
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: theme.space[1],
    marginHorizontal: theme.space[1],
    borderRadius: theme.radii[0],
  },
});

export default DetailsScreen;
