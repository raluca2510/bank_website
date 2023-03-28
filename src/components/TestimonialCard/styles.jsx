import styled from "styled-components";

export const TestimonialCardStyled = styled.div`
  margin: var(--marginY) 0;
  padding: var(--padding-4) var(--padding-2);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--margin-3);
  border-radius: 2rem;
  min-width: 30vw;
  max-width: 370px;
  position: relative;
  z-index: 5;

  &:hover {
    background: var(--bg-black-gradient);
  }
`;

export const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 2.6rem;
  height: 1.7rem;
  object-fit: contain;
`;

export const Text = styled.p`
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  color: var(--text-white);
  min-height: 6.25rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => (props.gap ? "var(--margin-sm)" : "0")};
  align-items: ${(props) => props.align};
`;

export const Picture = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

export const Name = styled.h4`
  font-size: 1.25rem;
  line-height: 2rem;
  color: var(--text-white);
`;

export const Job = styled.p`
  line-height: 1.5rem;
`;
