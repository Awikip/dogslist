import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsListContainer from "./Components/DogsListContainer";
import { Route } from "react-router-dom";
import DogBreedImages from "./Components/DogBreedImages";
import DogBreedImagesContainer from "./Components/DogBreedImagesContainer";

class App extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <Route exact={true} path="/" component={DogsListContainer} />
          <Route
            exact={true}
            path="/dog-breeds/:breed"
            component={DogBreedImagesContainer}
          />
        </div>
      </main>
    );
  }
}

export default App;
