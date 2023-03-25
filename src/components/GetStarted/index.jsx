import React from "react";
import { arrowUp } from "../../assets";
import * as G from "./styles";

const GetStarted = () => {
  return (
    <G.OutlineCircle>
      <G.Circle>
        <G.Span>
          Get
          <G.Img src={arrowUp} alt="arrow" />
        </G.Span>
        <G.Span>Started</G.Span>
      </G.Circle>
    </G.OutlineCircle>
  );
};

export default GetStarted;
