import React from "react";
import { feedback } from "../../constants";
import { TestimonialCard } from "../TestimonialCard/index";
import * as T from './styles'

const Testimonials = () => {
  return (
    <T.TestimonialsStyled>
      <T.Gradient />
      <T.Introduction>
        <T.Heading>What people are saying about us</T.Heading>
        <T.Container>
          <T.Description>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </T.Description>
        </T.Container>
      </T.Introduction>

      <T.TestimonialsContainer>
        {feedback.map((card) => (
          <TestimonialCard key={card.id} {...card} />
        ))}
      </T.TestimonialsContainer>
    </T.TestimonialsStyled>
  );
};

export { Testimonials };
