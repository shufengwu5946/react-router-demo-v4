import React from "react";
import { Prompt } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Prompt message="Are you sure you want to leave?" when={true} />
        <h3>Home 1</h3>
        <h3>Home 2</h3>
        <h3>Home 3</h3>
        <h3>Home 4</h3>
        <h3>Home 5</h3>
        <h3>Home 6</h3>
        <h3>Home 7</h3>
        <h3>Home 8</h3>
        <h3>Home 9</h3>
        <h3>Home 10</h3>
      </div>
    );
  }
}

export default Home;
