import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Content from "./components/Content";

export default App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};
