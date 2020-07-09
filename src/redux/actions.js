// action types
export const CHANGE_SEARCH_TEXT_INPUT = "CHANGE_SEARCH_TEXT_INPUT";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const CHANGE_SCREEN_DIMENSIONS = "CHANGE_SCREEN_DIMENSIONS";
export const UPDATE_POSITION_IN_IMAGE_LIST = "UPDATE_POSITION_IN_IMAGE_LIST";

//action creators
export const updateSearchResults = (results) => ({
  type: UPDATE_SEARCH_RESULTS,
  results,
});

export const changeSearchTextInput = (text) => ({
  type: CHANGE_SEARCH_TEXT_INPUT,
  text,
});

export const changeScreenDimensions = (
  screenWidth,
  screenHeight,
  screenOrientation
) => ({
  type: CHANGE_SCREEN_DIMENSIONS,
  screenWidth,
  screenHeight,
  screenOrientation,
});

export const updatePositionInImageList = (index) => ({
  type: UPDATE_POSITION_IN_IMAGE_LIST,
  index,
});
