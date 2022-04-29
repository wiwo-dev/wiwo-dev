import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
