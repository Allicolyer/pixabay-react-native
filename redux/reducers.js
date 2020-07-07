import { combineReducers } from "redux";
import {
  CHANGE_SEARCH_TEXT_INPUT,
  UPDATE_SEARCH_RESULTS,
  CHANGE_SCREEN_ORIENTATION,
} from "./actions";

//keeps track of the search results for the user's search input text
const searchResults = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

//keeps track of the text inputed by the user in ./components/SearchTextInput
const searchTextInput = (state = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT_INPUT:
      return action.text;
    default:
      return state;
  }
};

//changes to the screen orientation are listened for in ./components/Content
const screenOrientation = (state = "portrait", action) => {
  switch (action.type) {
    case CHANGE_SCREEN_ORIENTATION:
      return action.text;
    default:
      return state;
  }
};

export default combineReducers({
  searchResults,
  searchTextInput,
  screenOrientation,
});
