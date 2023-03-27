import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--bg-blue-gradient);
  padding: var(--paddingY-sm) var(--padding-2);
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--bg-main);
  border-radius: 0.6rem;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
