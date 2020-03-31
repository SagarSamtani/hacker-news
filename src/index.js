import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app/App";
import * as serviceWorker from "./app/serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./app/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserHistory } from "history";
import axiosInterceptor from "./utils/axiosInterceptor";

const { store, persistor } = configureStore(),
  history = createBrowserHistory();

axiosInterceptor.config(store, history);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
