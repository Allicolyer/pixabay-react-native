import { StyleSheet } from "react-native";
import { theme } from "./theme";

//styles used throughout app
const utilites = {
  flexColumn: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
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
    color: theme.colors.white,
    textAlign: "center",
  },
};

//text styles
const text = {
  centerText: { textAlign: "center" },
  headerText: {
    marginVertical: theme.space[2],
    color: theme.colors.primary,
    fontSize: theme.fontSizes[3],
  },
  primaryText: {
    color: theme.colors.primary,
  },
};

//image styles
const images = {
  smallImage: {
    width: 100,
    height: 100,
  },
  largeImage: {
    width: 300,
    height: 300,
  },
};

const styles = StyleSheet.create({
  ...utilites,
  ...buttons,
  ...text,
  ...images,
});

export default styles;
