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
export const assessScreenOrientation = (width, height) => {
  if (height > width) {
    return "portrait";
  } else {
    return "landscape";
  }
};
