import React, { Component } from "react";

export interface IDogsListProps {
  dogBreeds: string[];
}

export default (props: IDogsListProps) => (
  <div className="dogs-list">
    <h1>Dogs List</h1>
    <ul>
      {props.dogBreeds.map(breed => (
        <li key={breed}>{breed}</li>
      ))}
    </ul>
  </div>
);
