import React, { Component } from "react";
import { Link } from "react-router-dom";

export interface IDogsListProps {
  dogBreeds: string[];
}

export default (props: IDogsListProps) => (
  <div className="dogs-list">
    <h1>Dogs List</h1>
    <ul>
      {props.dogBreeds.map(breed => (
        <li key={breed}>
          <Link to={`/dog-breeds/${breed}`}> {breed}</Link>
        </li>
      ))}
    </ul>
  </div>
);
