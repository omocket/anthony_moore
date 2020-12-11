import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./toDo.css";
import ShopList from "./shopList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ShopList />
  </React.StrictMode>,
  rootElement
);
