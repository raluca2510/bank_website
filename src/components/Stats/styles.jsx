import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--margin-3) 0;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Stat = styled.div`
  flex: 1;
  margin: var(--margin-sm);
  display: flex;
  align-items: center;
  max-width: 100%;

  @media (min-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const StatNum = styled.h4`
  color: var(--text-white);
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 2.6rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
    line-height: 3.3rem;
  }
`;

export const StatTitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  margin-left: var(--marginX-sm);
  background: var(--text-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  @media (min-width: 640px) {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-left: 0;
    text-align: center;
  }
`;