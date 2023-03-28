import React from "react";
import * as F from "./styles";

const FeatureCard = ({ icon, title, content, marginBottom }) => {
  return (
    <F.FeatureCardStyled marginBottom={marginBottom}>
      <F.IconContainer>
        <F.Icon src={icon} alt="icon" />
      </F.IconContainer>
      <F.TextContainer>
        <F.Title>{title}</F.Title>
        <F.Description>{content}</F.Description>
      </F.TextContainer>
    </F.FeatureCardStyled>
  );
};

export { FeatureCard };
