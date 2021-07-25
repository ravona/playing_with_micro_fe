import React from "react";

// components:
import Grid from "./components/Grid/Grid";
import Text from "./components/Text/Text";
import Image from "./components/Image/Image";
import List from "./components/List/List";
import "./App.scss";

// props:
const list = [
  "Aliquam tincidunt",
  "Vestibulum auctor",
  "Vivamus vestibulum ntulla",
  "Cras iaculis ultricies",
  "Ut aliquam sollicitudin leo",
];

function App() {
  return (
    <div className="App">
      <Grid />
      <Text />
      <Image />
      <List list={list} />
    </div>
  );
}

export default App;
