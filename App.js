import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", {}, "Hello WOPrld");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
