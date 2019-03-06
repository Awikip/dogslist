import React from "react";

export interface IDogImage {
  url: string;
  key?: string;
}

export default (props: IDogImage) => {
  return <img src={props.url} />;
};
