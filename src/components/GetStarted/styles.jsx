import styled from "styled-components";

export const OutlineCircle = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: var(--bg-blue-gradient);
  padding: 2px;

  &:hover {
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-main);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 1.8rem;
  height: 1.8rem;
`;

export const Span = styled.span`
  background: var(--text-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 3px;
`;
