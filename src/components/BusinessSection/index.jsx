import React from "react";
import { Button } from "../Button/index";
import * as B from "./styles";
import { FeatureCard } from "../FeatureCard/index";

const BusinessSection = ({
  id,
  direction,
  features,
  heading,
  description,
  buttonValue,
  image,
  img1,
  img2,
  gradient1,
  gradient2,
}) => {
  return (
    <B.BusinessSectionStyled id={id} direction={direction}>
      <B.TextContainer>
        <B.Heading>{heading}</B.Heading>
        <B.Description>{description}</B.Description>
        <B.Span>
          {buttonValue && <Button value={buttonValue} />}
          {img1 && <B.Img src={img1} alt={img1} />}
          {img2 && <B.Img src={img2} alt={img2} />}
        </B.Span>
      </B.TextContainer>
      <B.ImageContainer>
        {image && <B.Image src={image} alt={image} />}
        {features &&
          features.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              marginBottom={idx !== features.length - 1 ? "var(margin-2)" : "0"}
            />
          ))}
        <B.Gradient background={gradient1} z="0" w="60%" h="80%" t="0" />
        <B.Gradient
          background={gradient2}
          z="3"
          bottom="0"
          w="40%"
          h="40%"
          t="50%"
        />
      </B.ImageContainer>
    </B.BusinessSectionStyled>
  );
};

export { BusinessSection };
