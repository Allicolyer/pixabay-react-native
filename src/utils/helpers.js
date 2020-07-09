import { env } from "../../.env";
import styles from "../style/appStyles";
import { Dimensions } from "react-native";

// API call to pixabay
export const paginatedPixabayAPICall = async (text) => {
  if (text.length) {
    // encode the input text from the redux store
    const q = encodeURIComponent(text);
    let num = 1;
    let alreadyViewed = 200;
    let hits = [];
    //call the API until all images have been added to the hits array
    try {
      let json = await pixabayAPICall(q, num);
      hits.push(...json.hits);
      let totalHits = json.totalHits;

      //keep iterating until all pages have been visited
      while (totalHits >= alreadyViewed) {
        num += 1;
        alreadyViewed += 200;
        json = await pixabayAPICall(q, num);
        hits.push(...json.hits);
      }
      return { hits: hits, totalHits: totalHits };
    } catch (error) {
      console.log(error);
    }
  }
  //if there is no input text return null for both fields
  else return { hits: null, totalHits: null };
};

export const pixabayAPICall = async (encodedText, num) => {
  try {
    //fetch the URL with the encoded query
    let response = await fetch(
      `https://pixabay.com/api/?key=${env.PIXABAY_KEY}&q=${encodedText}&image_type=photo&pretty=true&per_page=200&page=${num}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
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

//calculate the size of the image thumbnail in the imageList
export const calculateImageThumbnailWidthandHeight = (
  screenWidth,
  screenOrientation,
  marginInPixels
) => {
  //get imageMargin from stylesheet
  const imageMargin = styles.imageThumbnail.margin;
  //subtract the width of the side margin from the screenWidth
  const availableWidth = screenWidth - 2 * marginInPixels;
  //There should be 4 columns in portrait and 8 in landscape
  numColumns = screenOrientation == "portrait" ? 4 : 8;
  imageWidth = Math.floor(availableWidth / numColumns);
  //return the width of the image including margins
  return imageWidth - 2 * imageMargin;
};
