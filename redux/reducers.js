import { combineReducers } from "redux";
import { CHANGE_INPUT_TEXT, SEARCH } from "./actions";

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

export default combineReducers({
  searchResults,
  inputText,
});
