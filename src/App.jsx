import { React, useState } from "react";
import GlobalStyle from "./styles";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/index";
import { Hero } from "./components/Hero/index";
import Stats from "./components/Stats";
import { BusinessSection } from "./components/BusinessSection";
import { navLinks, features } from "./constants";
import { apple, bill, card, google } from "./assets";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import CTA from "./components/CTA";
import { Footer } from "./components/Footer";
import { Circle2 } from "react-preloaders";

const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  max-width: 100%;
  background: var(--bg-main);
  padding-top: 5rem;
`;

const Container = styled.div`
  background: ${(props) =>
    props.background ? props.background : "var(--bg-main)"};
  width: 100%;
  padding-right: ${(props) => (props.paddingRight ? "var(--padding-3)" : "0")};
  padding-left: ${(props) => (props.paddingLeft ? "var(--padding-3)" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  top: 0;
  z-index: ${(props) => props.z};
  transition: all 0.3s ease-in;

  @media (min-width: 1280px) {
    max-width: ${(props) =>
      props.maxBoxWidth ? "var(--box-width-max)" : "100%"};
  }
`;

function App() {
  const [colorChange, setColorchange] = useState("none");

  // Change navbar color on scroll
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange("rgba(0, 4, 15, 0.5)");
    } else {
      setColorchange("none");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <AppStyled>
      <GlobalStyle />

      {/* Navbar */}
      <Container background={colorChange} position="fixed" z="6">
        <Container background={colorChange} paddingLeft paddingRight>
          <Navbar />
        </Container>
      </Container>

      {/* Hero */}
      <Container>
        <Container maxBoxWidth>
          <Hero />
        </Container>
      </Container>

      {/* Main */}
      <Container paddingLeft paddingRight>
        <Container maxBoxWidth>
          <Stats />
          <BusinessSection
            id={navLinks[1].id}
            direction="row"
            heading="You do the business, we’ll handle the money."
            description="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
            buttonValue="Get Started"
            features={features}
          />
          <BusinessSection
            id={navLinks[2].id}
            direction="row-reverse"
            heading="Easily control your billing & invoicing"
            description="Create, send, and track invoices from any device with a wifi connection. Schedule recurring invoices and past-due notices to be sent automatically."
            img2={apple}
            img1={google}
            image={bill}
            gradient1="var(--blue-gradient)"
            gradient2="var(--white-gradient)"
          />
          <BusinessSection
            id={navLinks[3].id}
            direction="row"
            heading="Find a better card deal in few easy steps."
            description="Easily finance with our credit products or access money from your balance with our debit card. Shop smarter with a debit card that makes it easier to earn rewards and manage your money."
            buttonValue="Get Started"
            image={card}
          />
          <Testimonials id={navLinks[4].id} />
          <Clients />
          <CTA />
        </Container>
      </Container>

      <Container>
        <Container background="rgba(11, 10, 12, 0.6)">
          <Footer />
        </Container>
      </Container>
      <Circle2
        color="#7de7eb"
        background="var(--bg-main)"
        animation="slide"
        time={2000}
      />
    </AppStyled>
  );
}

export default App;
