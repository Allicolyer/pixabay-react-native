import { combineReducers } from "redux";
import {
  CHANGE_INPUT_TEXT,
  SEARCH,
  SCREEN_ORIENTATION_CHANGE,
} from "./actions";

const searchResults = (state = [], action) => {
  switch (action.type) {
    case SEARCH:
      return action.results;
    default:
      return state;
  }
};

const inputText = (state = "", action) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT:
      return action.text;
    default:
      return state;
  }
};

const screenOrientation = (state = "portrait", action) => {
  switch (action.type) {
    case SCREEN_ORIENTATION_CHANGE:
      return action.text;
    default:
      return state;
  }
};

export default combineReducers({
  searchResults,
  inputText,
  screenOrientation,
});
