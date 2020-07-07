import React from "react";
import styles from "../utils/appStyles";
import { TouchableOpacity, View, Text, Image } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { image } = route.params;
  return (
    <View style={[styles.flexColumn, styles.flexOne, styles.margin]}>
      <Image
        resizeMode="stretch"
        key={`id${image.id}`}
        source={{ uri: image.webformatURL }}
        style={[
          styles.roundedBorder,
          styles.marginHorizontal,
          styles.marginVertical,
          styles.largeImage,
        ]}
      />
      <Text style={styles.marginHorizontal}>Uploaded By: {image.user}</Text>
      <Text style={styles.marginHorizontal}>Tags: {image.tags}</Text>
      <Text style={styles.marginHorizontal}>
        Resolution: {image.imageWidth} x {image.imageHeight}
      </Text>
      <TouchableOpacity
        style={(styles.marginHorizontal, styles.button)}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
