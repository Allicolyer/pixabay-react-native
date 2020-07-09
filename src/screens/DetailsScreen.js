import React from "react";
import styles from "../style/appStyles";
import { calculateImageDisplayDimensions } from "../utils/helpers";
import { TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

//The DetailsScreen displays details about a specific image
const DetailsScreen = ({ route, navigation, screenDimensions }) => {
  //image is passed in from ./components/SearchResults.js
  const { image } = route.params;

  //the containers will either be a row or a column depending on the screenOrientation
  let containerStyle, textContainerStyle;
  if (screenDimensions.screenOrientation === "portrait") {
    containerStyle = styles.flexColumn;
  } else {
    containerStyle = styles.flexRow;
    textContainerStyle = { width: 200 };
  }

  //calcuate display image width and height
  let imageDimensions = calculateImageDisplayDimensions(
    screenDimensions,
    image.webformatWidth,
    image.webformatHeight
  );

  return (
    <View style={[containerStyle, styles.flexOne, styles.margin]}>
      <View style={styles.flexColumn}>
        <Image
          resizeMode="cover"
          key={`id${image.id}`}
          source={{ uri: image.webformatURL }}
          style={[
            styles.roundedBorder,
            styles.margin,
            {
              width: imageDimensions.width,
              height: imageDimensions.height,
            },
          ]}
        />
      </View>
      <View style={[textContainerStyle, styles.flexColumn, styles.margin]}>
        <Text style={styles.infoText}>Uploaded By: {image.user}</Text>
        <Text style={styles.infoText}>Tags: {image.tags}</Text>
        <Text style={styles.infoText}>
          Resolution: {image.imageWidth} x {image.imageHeight}
        </Text>
        <TouchableOpacity
          style={[styles.marginVertical, styles.button]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

DetailsScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  screenDimensions: PropTypes.shape({
    screenWidth: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    screenOrientation: PropTypes.string.isRequired,
  }),
};

export default DetailsScreen;
