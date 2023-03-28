import styled from "styled-components";

export const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  max-width: 100%;
  background: var(--bg-main);
  padding-top: 5rem;
  position: relative;
`;

export const Container = styled.div`
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