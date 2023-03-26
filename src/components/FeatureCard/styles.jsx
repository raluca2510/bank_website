import styled from "styled-components";

export const FeatureCardStyled = styled.div`
  display: flex;
  padding: var(--padding-sm);
  border-radius: 2rem;
  margin-bottom: ${(props) => props.marginBottom};
  gap: var(--margin-sm);

  &:hover {
    background: var(--bg-black-gradient);
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(9, 151, 124, 0.1);
`;

export const Icon = styled.img`
  width: 50%;
  height: 50%
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 2rem;
`;

export const Description = styled.p`
  line-height: 2rem;
`;