import { React } from "react";
import GlobalStyle from "./styles";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/index";
import { Hero } from "./components/Hero/index";

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
      <Container paddingLeft>
        <Container maxBoxWidth>
          <Hero />
        </Container>
      </Container>

      {/* Main */}
      <Container>
        <Container maxBoxWidth></Container>
      </Container>
    </AppStyled>
  );
}

export default App;
