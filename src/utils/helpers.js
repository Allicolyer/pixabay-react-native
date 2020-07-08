import { env } from "../../.env";
import styles from "../style/appStyles";
import { Dimensions } from "react-native";

// API call to pixabay
export const pixabayAPICall = async (text) => {
  // encode the input text from the redux store
  if (text.length) {
    const q = encodeURIComponent(text);
    //fetch the URL with the encoded query
    return fetch(
      `https://pixabay.com/api/?key=${env.PIXABAY_KEY}&q=${q}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((json) => {
        //return the hits for the search query
        return json.hits;
      })
      .catch((error) => {
        console.error(error);
      });
  } else return null;
};

//assess the screenOrientation from input dimensions
export const calculateScreenOrientation = (width, height) => {
  if (height > width) {
    return "portrait";
  } else {
    return "landscape";
  }
};

//figure out initial screenDimensions based on the window size
export const calculateInitalScreenDimensions = () => {
  const window = Dimensions.get("window");
  return {
    screenWidth: window.width,
    screenHeight: window.height,
    screenOrientation: calculateScreenOrientation(window.width, window.height),
  };
};

//calculate the image display dimensions for the detail screen
export const calculateImageDisplayDimensions = (
  screenDimensions,
  inputWidth,
  inputHeight
) => {
  const { screenWidth, screenHeight, screenOrientation } = screenDimensions;

  let imageWidth, imageHeight;
  let imageRatio = inputWidth / inputHeight;

  if (screenOrientation === "portrait") {
    //if screen is in portrait mode, the image width should be 85% of the screen width
    imageWidth = 0.85 * screenWidth;
    //scale the height in proportion
    imageHeight = (1 / imageRatio) * imageWidth;
    //for extra tall images, make sure the image is not too tall for the screen. If it is, rescale according to the screen height.
    if (imageHeight > 0.6 * screenHeight) {
      imageHeight = 0.6 * screenHeight;
      imageWidth = imageRatio * imageHeight;
    }
  } else {
    //in landscape mode, the image height should be 70% of screen height
    imageHeight = 0.7 * screenHeight;
    //scale the width in proportion
    imageWidth = imageRatio * imageHeight;
    //for extra wide images, make sure the image is still not too wide for the screen. If it is, rescale according to the screen width.
    if (imageWidth > 0.6 * screenWidth) {
      imageWidth = 0.6 * screenWidth;
      imageHeight = (1 / imageRatio) * imageWidth;
    }
  }

  return { width: imageWidth, height: imageHeight };
};

//calculate the number of columns that should be shown in the image list
export const calculateImageListColumns = (screenWidth, marginInPixels) => {
  //calcuate imageWidth using stylesheet
  imageWidth = styles.imageThumbnail.width + styles.imageThumbnail.margin;
  //get the width of the screen from the redux store, subtrack the width of the side margin
  const availableWidth = screenWidth - 2 * marginInPixels;
  //return how many columns can fit
  return Math.floor(availableWidth / imageWidth);
};
