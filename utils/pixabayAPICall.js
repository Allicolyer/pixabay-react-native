import { env } from "../.env";
import store from "../redux/store";

// API call to pixabay
const pixabayAPICall = async () => {
  // encode the input text
  const q = encodeURIComponent(store.getState().inputText);
  return fetch(
    `https://pixabay.com/api/?key=${env.PIXABAY_KEY}&q=${q}&image_type=photo&pretty=true`
  )
    .then((response) => response.json())
    .then((json) => {
      return json.hits;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default pixabayAPICall;
