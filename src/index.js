//Root file
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//we pass the createStore a set of reducers and in turn it returns a Redux Store
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";
//import the Provider that wraps the App

//you then wrap the Providers and pass the store that is created out of createStore (which takes in the reducers set you imported)
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
