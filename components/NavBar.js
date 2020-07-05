import React from "react";
import { theme } from "../utils/theme";
import { StyleSheet, View, Text, Image } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.navText}>Pixabay Image Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginHorizontal: theme.space[1],
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    fontSize: theme.fontSizes[3],
    backgroundColor: theme.colors.primaryTint,
    height: theme.navHeight,
  },
  navText: {
    marginHorizontal: theme.space[1],
    color: theme.colors.white,
    textAlign: "center",
  },
});

export default NavBar;
