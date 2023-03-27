import styled from "styled-components";

export const TestimonialsStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: var(--margin-3) 0;
  gap: var(--margin-4);
  position: relative;
  z-index: 5;

  @media (min-width: 768px) {
    margin: var(--margin-5);
  }
`;

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--paddingY) 0;
  align-items: center;
  justify-content: center;
  gap: var(--margin-2);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h2`
  flex: 1;
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
  color: var(--text-white);

  @media (min-width: 640px) {
    font-size: var(--h2-font-size-sm);
    line-height: var(--h2-line-height-sm);
  }
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
`;

export const Description = styled.p`
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  text-align: left;
  max-width: 450px;
`;

export const TestimonialsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--margin-2);
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 0;
  width: 60%;
  height: 80%;
  right: -50%;
  bottom: 20%;
  border-radius: 100%;
  background: var(--blue-gradient);
  filter: blur(500px);
`