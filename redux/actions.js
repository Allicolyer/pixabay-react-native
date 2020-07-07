/*
 * action types
 */

export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";
export const SEARCH = "SEARCH";
export const SCREEN_ORIENTATION_CHANGE = "SCREEN_ORIENTATION_CHANGE";

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

export const screenOrientationChange = (text) => ({
  type: "SCREEN_ORIENTATION_CHANGE",
  text,
});
