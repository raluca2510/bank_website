import React from "react";
import { discount, robot } from "../../assets";
import GetStarted from "../GetStarted/index";
import * as H from "./styles";

const Hero = () => {
  return (
    // <p>j</p>
    <H.HeroStyled id="home">
      <H.HeroText>
        <H.Discount>
          <H.DiscountIcon src={discount} alt="discount-icon" />
          <H.DiscountText>
            <H.Span textColor="var(--text-white)">20%</H.Span> discount for{" "}
            <H.Span textColor="var(--text-white)">1 month</H.Span> account
          </H.DiscountText>
        </H.Discount>

        <H.Container>
          <H.Heading flex="1">
            The next{" "}
            <H.Span
              backgroundColor="var(--text-gradient)"
              fillColor="transparent"
            >
              generation
            </H.Span>
          </H.Heading>

          <H.CallToActionDesktop>
            <GetStarted />
          </H.CallToActionDesktop>
        </H.Container>

        <H.Heading fontSize="">payment method.</H.Heading>

        <H.Description>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </H.Description>
      </H.HeroText>

      <H.HeroImage>
        <H.Img src={robot} alt="hero-image" />
        <H.Gradient
          backgroundColor="var(--pink-gradient)"
          w="40%"
          h="35%"
          top="0"
          zIndex="0"
          blur="900px"
        />
        <H.Gradient
          backgroundColor="var(--white-gradient)"
          w="80%"
          h="70%"
          bottom="10rem"
          zIndex="1"
          blur="123px"
          borderRadius="99999px"
        />
        <H.Gradient
          backgroundColor="var(--blue-gradient)"
          w="50%"
          h="100%"
          bottom="2rem"
          right="5rem"
          zIndex="0"
          blur="750px"
        />
      </H.HeroImage>

      <H.CallToActionMobile>
        <GetStarted />
      </H.CallToActionMobile>
    </H.HeroStyled>
  );
};

export { Hero };
