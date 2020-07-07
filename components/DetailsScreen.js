import React from "react";
import styles from "../utils/appStyles";
import { TouchableOpacity, View, Text, Image } from "react-native";

//The DetailsScreen displays details about a specific image
const DetailsScreen = ({ route, navigation, screenOrientation }) => {
  //image is passed in from ./components/ImageList.js
  const { image } = route.params;
  //the container will either be a row or a column depending on the screenOrientation
  const containerStyle =
    screenOrientation === "portrait" ? styles.flexColumn : styles.flexRow;

  return (
    <View style={[containerStyle, styles.flexOne, styles.margin]}>
      <Image
        resizeMode="stretch"
        key={`id${image.id}`}
        source={{ uri: image.webformatURL }}
        style={[styles.roundedBorder, styles.margin, styles.largeImage]}
      />
      <View style={styles.margin}>
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
    </View>
  );
};

export default DetailsScreen;
