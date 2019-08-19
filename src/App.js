import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>react-router demo</h1>
        <ul>
          <li>
            <NavLink to="/home" activeStyle={{ color: "red" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ color: "red" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" activeStyle={{ color: "red" }}>
              Inbox
            </NavLink>
          </li>
        </ul>
        <div style={{ height: 300, overflowY: "auto" }}>
          <ScrollToTop>{this.props.children}</ScrollToTop>
        </div>
      </div>
    );
  }
}

export default App;
