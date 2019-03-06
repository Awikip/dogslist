import React, { Component } from "react";
import * as request from "superagent";
import Dogslist from "./Dogslist";

interface IDogsListContainerState {
  dogBreeds: null | string[];
}

export default class DogsListContainer extends Component<
  {},
  IDogsListContainerState
> {
  public state: IDogsListContainerState = { dogBreeds: null };

  public componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error);
  }

  public render() {
    if (this.state.dogBreeds === null) {
      return <p>Loading...</p>;
    }

    return <Dogslist dogBreeds={this.state.dogBreeds} />;
  }

  private updateBreeds = (breeds: string[]) => {
    this.setState({
      dogBreeds: breeds
    });
  };
}
