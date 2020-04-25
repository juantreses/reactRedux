import React from "react";
import { Provider } from "react-redux";

import store from "./data";
import Count from "./components/Count";
import Friends from "./components/Friends";
import Filters from "./components/Filters";
import Music from "./components/Music";

function App() {
  return (
    <Provider store={store}>
      <Count />
      <hr />
      <Friends />
      <hr />
      <Filters />
      <hr />
      <Music />
    </Provider>
  );
}

export default App;
