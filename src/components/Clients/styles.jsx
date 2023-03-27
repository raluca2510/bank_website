import styled from "styled-components";

export const ClientsStyled = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--margin-3) 0;

  @media (min-width: 768px) {
    margin: var(--margin-5) 0;
  }
`;

export const Container = styled.div`
  display: flex;
//   flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--margin-2);
`;

export const Client = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  margin: var(--margin);

  @media (min-width: 768px) {
    min-width: 12rem;
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 6.25rem;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 12rem;
  }
`;