import React from "react";
import { theme } from "../utils/theme";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>You are looking at the details for image {id} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: theme.colors.primary,
    padding: theme.space[2],
    borderRadius: theme.radii[0],
    marginHorizontal: theme.space[1],
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: "center",
  },
});

export default DetailsScreen;
