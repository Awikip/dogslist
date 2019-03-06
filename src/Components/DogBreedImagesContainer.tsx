import React, { Component } from "react";
import * as request from "superagent";
import DogBreedImages from "./DogBreedImages";
import { RouteComponentProps } from "react-router";

interface IDogBreedImagesContainerState {
  dogImages: null | string[];
}

interface IDogBreedImagesContainerParams {
  breed: string;
}

interface IDogBreedImagesContainerProps
  extends RouteComponentProps<IDogBreedImagesContainerParams> {}

export default class DogBreedImagesContainer extends Component<
  IDogBreedImagesContainerProps,
  IDogBreedImagesContainerState
> {
  public state: IDogBreedImagesContainerState = {
    dogImages: null
  };

  public componentDidMount() {
    const { breed } = this.props.match.params;

    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error);
  }

  public render() {
    if (this.state.dogImages === null) {
      return <p>Loading...</p>;
    }
    const { breed } = this.props.match.params;
    return <DogBreedImages dogImages={this.state.dogImages} breed={breed} />;
  }

  public updateImages = (images: string[]) => {
    this.setState({
      dogImages: images
    });
  };
}
