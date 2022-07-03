/** @format */

import React from "react";
import "./App.css";
import { Divider } from "@mui/material";
import Header from "./components/Header";
import IconBar from "./components/IconBar";

const App = () => {
  return (
    <div>
      <Header />
      <Divider />
      <IconBar />
    </div>
  );
};

export default App;
