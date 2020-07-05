import { env } from "../.env";

// API call to query pixabay
const pixabayAPICall = async (q) => {
  // encode the input query
  q.replace(/ /g, "+");
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
