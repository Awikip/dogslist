import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsListContainer from "./Components/DogsListContainer";

class App extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <DogsListContainer />
        </div>
      </main>
    );
  }
}

export default App;
