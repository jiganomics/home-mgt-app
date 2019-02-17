import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "../semantic/dist/semantic.min.css";
import store from "./store.js";


const render = () => {
	ReactDOM.render(
	  <App value={store.getState().counter} />,
	  document.getElementById("root") // eslint-disable-line no-undef
	);
};

store.subscribe(render);
render();