import styled from "styled-components";

export const FooterStyled = styled.section`
  width: 100%;
  max-width: var(--box-width-max);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0 var(--padding-3) var(--padding-4);
  gap: var(--margin-4);
  margin-top: var(--margin-3);

  @media (min-width: 768px) {
    margin-top: var(--margin-5);
  }
`;

export const WebsiteNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  gap: var(--margin-4);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Company = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: var(--margin-2);
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 16rem;
  height: 4.5rem;
`;

export const Text = styled.p`
  font-size: var(--p-font-size);
  line-height: var(--line-height);
  max-width: 19.5rem;
`;

export const NavSections = styled.div`
  flex: 1.5;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--margin-3);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 9rem;
`;

export const Header = styled.h4`
  color: var(--text-white);
  font-size: 1.1rem;
  line-hieght: 1.7rem;
  margin-bottom: var(--margin-sm);
`;

export const NavList = styled.ul`
  list-style-type: none;
`;

export const NavLink = styled.li`
  line-height: 1.5rem;
  margin-bottom: ${(props) => props.marginBottom};

  &:hover {
    cursor: pointer;
    color: #7de7eb;
  }
`;

export const ExtraInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #3f3e45;
  padding-top: var(--padding-3);
  gap: var(--margin-2);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Copyright = styled.p`
  color: var(--text-white);
  font-size: 1.1rem;
  line-hieght: 1.7rem;
  text-align: center;
`;

export const Socials = styled.div`
  display: flex;
  gap: var(--margin-sm);
`;

export const SocialIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 1.3rem;
  height: 1.3rem;

  &:hover {
    cursor: pointer;
  }
`;