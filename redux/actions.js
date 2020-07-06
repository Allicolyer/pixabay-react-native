/*
 * action types
 */

export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";
export const SEARCH = "SEARCH";

/*
 * action creators
 */

export const search = (results) => ({
  type: "SEARCH",
  results,
});

export const changeInputText = (text) => ({
  type: "CHANGE_INPUT_TEXT",
  text,
});
