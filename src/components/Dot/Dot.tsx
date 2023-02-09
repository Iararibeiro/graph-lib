import React from "react";

export interface DotProps {
  x: number;
  y: number;
}

const Dot = (props: DotProps) => {
  return <div>{props.x} {props.y}</div>;
};

export default Dot;