import styled from "styled-components";

export const BusinessSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--margin-4);
  margin: var(--margin-3);

  @media (min-width: 768px) {
      flex-direction: ${props => props.direction};
      margin: var(--margin-5) 0;
  }
`;

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--margin-3);
    justify-content: center;
`

export const Heading = styled.h2`
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    color: var(--text-white);
    width: 96%;

    @media (min-width: 640px) {
        font-size: var(--h2-font-size-sm);
        line-height: var(--h2-line-height-sm);
    }
`

export const Description = styled.p`
    font-size: var(--p-font-size);
    line-height: var(--p-line-height);
    max-width: 470px;
`

export const Span = styled.span`
    display: flex;
    gap: var(--margin-2);
`

export const Img = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    width: 8rem;
    height: 2.6rem;

    &:hover {
        cursor: pointer;
    }
`

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--margin-2);

    @media (min-width: 768px) {
        // margin-left: var(--margin-3);
    }
`

export const Image = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: contain;
`