// action types
export const CHANGE_SEARCH_TEXT_INPUT = "CHANGE_SEARCH_TEXT_INPUT";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const CHANGE_SCREEN_ORIENTATION = "CHANGE_SCREEN_ORIENTATION";

//action creators
export const updateSearchResults = (results) => ({
  type: UPDATE_SEARCH_RESULTS,
  results,
});

export const changeSearchTextInput = (text) => ({
  type: CHANGE_SEARCH_TEXT_INPUT,
  text,
});

export const changeScreenOrientation = (text) => ({
  type: CHANGE_SCREEN_ORIENTATION,
  text,
});
