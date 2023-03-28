import React from "react";
import { quotes } from "../../assets";
import * as T from "./styles";

const TestimonialCard = ({ content, name, title, img }) => {
  return (
    <T.TestimonialCardStyled>
      <T.Icon src={quotes} alt="quotes" />
      <T.Text>{content}</T.Text>
      <T.Container direction="row" align="center" gap>
        <T.Picture src={img} alt="profile-picture"></T.Picture>
        <T.Container direction="column">
          <T.Name>{name}</T.Name>
          <T.Job>{title}</T.Job>
        </T.Container>
      </T.Container>
    </T.TestimonialCardStyled>
  );
};

export { TestimonialCard };
