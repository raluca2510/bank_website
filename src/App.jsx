import { React } from "react";
import GlobalStyle from "./styles";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/index";
import { Hero } from "./components/Hero/index";
import Stats from "./components/Stats";
import { BusinessSection } from "./components/BusinessSection";
import { navLinks, features } from "./constants";
import { apple, bill, card, google } from "./assets";

const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  max-width: 100%;
`;

const Container = styled.div`
  background: var(--bg-main);
  width: 100%;
  padding-right: ${(props) => (props.paddingRight ? "var(--padding-3)" : "0")};
  padding-left: ${(props) => (props.paddingLeft ? "var(--padding-3)" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    max-width: ${(props) =>
      props.maxBoxWidth ? "var(--box-width-max)" : "100%"};
  }
`;

function App() {
  return (
    <AppStyled>
      <GlobalStyle />

      {/* Navbar */}
      <Container paddingRight paddingLeft>
        <Container maxBoxWidth>
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
            direction='row'
            heading="You do the business, we’ll handle the money."
            description="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
            buttonValue='Get Started'
            features={features}
          />
          <BusinessSection
            id={navLinks[2].id}
            direction='row-reverse'
            heading="Easily control your billing & invoicing"
            description="Create, send, and track invoices from any device with a wifi connection. Schedule recurring invoices and past-due notices to be sent automatically."
            img2={apple}
            img1={google}
            image={bill}
            gradient1='var(--blue-gradient)'
            gradient2='var(--white-gradient)'
          />
          <BusinessSection
            id={navLinks[3].id}
            direction='row'
            heading="Find a better card deal in few easy steps."
            description="Easily finance with our credit products or access money from your PayPal balance with our debit card. Shop smarter with a debit card that makes it easier to earn rewards and manage your money."
            buttonValue='Get Started'
            image={card}
          />
        </Container>
      </Container>
    </AppStyled>
  );
}

export default App;
