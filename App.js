import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Content from "./src/components/Content";
import { StatusBar } from "expo-status-bar";

export default App = () => {
  return (
    <Provider store={store}>
      <Content />
      <StatusBar style="auto" />
    </Provider>
  );
};
