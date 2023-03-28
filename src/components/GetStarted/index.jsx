import React from "react";
import { arrowUp } from "../../assets";
import * as G from "./styles";

const GetStarted = () => {
  const handleCircleClick = () => {
    const section = document.querySelector("#about-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <G.OutlineCircle>
      <G.Circle onClick={() => handleCircleClick()}>
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
