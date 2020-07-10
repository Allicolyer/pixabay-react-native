import { combineReducers } from "redux";
import {
  CHANGE_SEARCH_TEXT_INPUT,
  UPDATE_SEARCH_RESULTS,
  CHANGE_SCREEN_DIMENSIONS,
  UPDATE_POSITION_IN_IMAGE_LIST,
} from "./actions";
import { calculateInitialScreenDimensions } from "../utils/helpers";

//keeps track of the search results for the user's search input text
const searchResults = (state = { hits: null, totalHits: null }, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

//keeps track of the text input in src/components/SearchTextInput
const searchTextInput = (state = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT_INPUT:
      return action.text;
    default:
      return state;
  }
};

//changes to the screen orientation are listened for in src/components/Content
const screenDimensions = (
  state = calculateInitialScreenDimensions(),
  action
) => {
  switch (action.type) {
    case CHANGE_SCREEN_DIMENSIONS:
      return {
        screenWidth: action.screenWidth,
        screenHeight: action.screenHeight,
        screenOrientation: action.screenOrientation,
      };
    default:
      return state;
  }
};

//keeps track of the position in the image list in src/components/ImageList.js
const indexInImageList = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_POSITION_IN_IMAGE_LIST:
      return action.index;
    default:
      return state;
  }
};

export default combineReducers({
  searchResults,
  searchTextInput,
  screenDimensions,
  indexInImageList,
});
