import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// Import ThirdWeb
import { ThirdWeb3Provider } from '@3rdweb/hooks';

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainsIds = [4];

// Include what type of wallet you want to support.



// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
