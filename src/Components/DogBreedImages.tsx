import React from "react";
import { Link } from "react-router-dom";
import DogImage from "./DogImage";

export default (props: any) => (
  <div className="dog-breed-images">
    <h1>Dog Breed Images</h1>
    This page will show images of the <strong>{props.breed}</strong> breed.
    <Link to="/">Go back to the index</Link>
    <div className="images">
      {props.dogImages.map((url: string) => (
        <DogImage key={url} url={url} />
      ))}
    </div>
  </div>
);
