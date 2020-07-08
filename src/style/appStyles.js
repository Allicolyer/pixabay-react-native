import { StyleSheet } from "react-native";
import { theme } from "./theme";

//styles used throughout app
const utilites = {
  flexColumn: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  flexOne: {
    flex: 1,
  },
  marginHorizontal: {
    marginHorizontal: theme.space[1],
  },
  marginVertical: {
    marginVertical: theme.space[1],
  },
  margin: {
    margin: theme.space[1],
  },
  roundedBorder: {
    borderRadius: theme.radii[0],
  },
};

//button styles
const buttons = {
  button: {
    width: 100,
    backgroundColor: theme.colors.primary,
    padding: theme.space[2],
    borderRadius: theme.radii[0],
  },
  buttonText: {
    fontWeight: theme.fontWeights[2],
    color: theme.colors.white,
    textAlign: "center",
  },
};

//text styles
const text = {
  infoText: { color: theme.colors.secondary, textAlign: "center" },
  headerText: {
    textAlign: "center",
    color: theme.colors.secondary,
    marginVertical: theme.space[2],
    fontSize: theme.fontSizes[3],
  },
};

//image styles
const images = {
  imageThumbnail: {
    width: 100,
    height: 100,
    margin: theme.space[1],
  },
};

//text input
const textInput = {
  //textInputs can't be styled with flexbox
  searchTextInput: {
    width: 200,
    height: 40,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    paddingHorizontal: theme.space[1],
  },
};

const styles = StyleSheet.create({
  ...utilites,
  ...buttons,
  ...text,
  ...images,
  ...textInput,
});

export default styles;
