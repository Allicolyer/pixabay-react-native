import React from "react";
import styles from "../style/appStyles";
import { calculateImageDisplayDimensions } from "../utils/helpers";
import { TouchableOpacity, View, Text, Image } from "react-native";

//The DetailsScreen displays details about a specific image
const DetailsScreen = ({ route, navigation, screenOrientation }) => {
  //image is passed in from ./components/ImageList.js
  const { image } = route.params;

  //the containers will either be a row or a column depending on the screenOrientation
  let containerStyle, textContainerStyle;
  if (screenOrientation === "portrait") {
    containerStyle = styles.flexColumn;
  } else {
    containerStyle = styles.flexRow;
    textContainerStyle = { width: 200 };
  }

  //calcuate display image width and height
  let imageDimensions = calculateImageDisplayDimensions(
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
        <Text style={[styles.primaryText, styles.marginHorizontal]}>
          Uploaded By: {image.user}
        </Text>
        <Text style={[styles.primaryText, styles.marginHorizontal]}>
          Tags: {image.tags}
        </Text>
        <Text style={[styles.primaryText, styles.marginHorizontal]}>
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