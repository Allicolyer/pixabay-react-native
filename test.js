const apiCall = async (q) => {
  // encode the input query
  q.replace(/ /g, "+");
  console.log(`This is the search parameter ${q}`);
  return fetch(
    `https://pixabay.com/api/?key=17264519-b486c3418fb497d15c7cb294a&q=${q}&image_type=photo&pretty=true`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.hits == images);
      // console.log(images);
      return json.hits;
    })
    .catch((error) => {
      console.error(error);
    });
};

let results = apiCall("Flower");
console.log(results);

// Next Steps
// to do  - encode the input query
//const encoded = encodeURI(uri);

// spaces become pluses
// hide API key somehow
// parse the results and feed them into a ListView
// figure out Android and IOS specific styling
