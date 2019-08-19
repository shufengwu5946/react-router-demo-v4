import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Prompt
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Inbox from "./Inbox";
import Error404 from "./Error404";

const getConfirmation = (message, callback) => {
  console.log(message);
  const allowTransition = window.confirm(message);
  callback(allowTransition);
};

ReactDOM.render(
  <BrowserRouter getUserConfirmation={getConfirmation}>
    <App>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Redirect exact from="/" to="/home" />
        <Route component={Error404} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
