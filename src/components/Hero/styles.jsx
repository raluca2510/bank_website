import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: var(--padding-2) 0;

  // @media (min-width: 768px) {
  //     flex-direction: row;
  // }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 0 var(--padding-3);
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--paddingY) var(--paddingX-sm);
  border-radius: 0.6rem;
  margin-bottom: var(--margin-2);
  background: var(--bg-discount-gradient);
`;

export const DiscountIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 2rem;
  height: 2rem;
`;

export const DiscountText = styled.p`
  text-transform: capitalize;
  font-weight: 400;
`;

export const Span = styled.span`
  color: ${(props) => props.textColor};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "none"};
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: ${(props) => (props.fillColor ? props.fillColor : "none")};
  -webkit-text-fill-color: ${(props) =>
    props.fillColor ? props.fillColor : "none"};
`;

export const Heading = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 3.25rem;
  color: var(--text-white);
  line-height: 4.7rem;
`;

export const Description = styled.p`
  margin-top: var(--margin-2);
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
`;

export const CallToAction = styled.div``;

export const HeroImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: var(--margin-3) 0;
  position: relative;

  // @media (min-width: 768px) {
  //     margin: 0;
  // }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
  object-fit: contain;
`;

export const Gradient = styled.div`
  background: ${(props) => props.backgroundColor};
  position: absolute;
  z-index: ${(props) => props.zIndex};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  filter: ${(props) => `blur(${props.blur})`};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;
