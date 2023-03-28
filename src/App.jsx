import { React, useEffect, useState } from "react";
import GlobalStyle from "./styles";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/index";
import { Hero } from "./components/Hero/index";
import { Stats } from "./components/Stats/index";
import { BusinessSection } from "./components/BusinessSection";
import { navLinks, features } from "./constants";
import { apple, bill, card, google } from "./assets";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import Puffloader from "react-spinners/Puffloader";
import * as A from './App.styled'

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

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <div style={{ width: '100%', height: '95vh', display: 'grid', placeContent: 'center' }}>
      <Puffloader
        color={"#7de7eb"}
        loading={isLoading}
        size={75}
        aria-label="Loading Spinner"
      />
    </div>
  ) : (
    <A.AppStyled>
      <GlobalStyle />

      {/* Navbar */}
      <A.Container background={colorChange} position="fixed" z="6">
        <A.Container background={colorChange} paddingLeft paddingRight>
          <Navbar />
        </A.Container>
      </A.Container>

      {/* Hero */}
      <A.Container>
        <A.Container maxBoxWidth>
          <Hero />
        </A.Container>
      </A.Container>

      {/* Main */}
      <A.Container paddingLeft paddingRight>
        <A.Container maxBoxWidth>
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
        </A.Container>
      </A.Container>

      <A.Container>
        <A.Container background="rgba(11, 10, 12, 0.6)">
          <Footer />
        </A.Container>
      </A.Container>
    </A.AppStyled>
  );
}

export default App;
