import { env } from "../../.env";
import store from "../redux/store";

// API call to pixabay
export const pixabayAPICall = async () => {
  // encode the input text from the redux store
  const q = encodeURIComponent(store.getState().searchTextInput);
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
};

//assess the screenOrientation from input dimensions
export const calculateScreenOrientation = (width, height) => {
  if (height > width) {
    return "portrait";
  } else {
    return "landscape";
  }
};

//calculate the image display dimensions for the detail screen
export const calculateImageDisplayDimensions = (inputWidth, inputHeight) => {
  const {
    screenWidth,
    screenHeight,
    screenOrientation,
  } = store.getState().screenDimensions;

  let imageWidth, imageHeight;
  let imageRatio = inputWidth / inputHeight;

  if (screenOrientation === "portrait") {
    //if screen is in portrait mode, the image width should be 85% of the screen width
    imageWidth = 0.85 * screenWidth;
    //scale the height in proportion
    imageHeight = (1 / imageRatio) * imageWidth;
    //for extra tall images, make sure the image is not too tall for the screen. If it is, rescale according to the screen width.
    if (imageHeight > 0.6 * screenHeight) {
      imageHeight = 0.6 * screenHeight;
      imageWidth = imageRatio * imageHeight;
    }
  } else {
    //in landscape mode, the image height should be 60% of screen height
    imageHeight = 0.8 * screenHeight;
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
