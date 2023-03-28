import React from "react";
import styled from "styled-components";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";
import * as F from "./styles";

const Footer = () => (
  <F.FooterStyled>
    <F.WebsiteNav>
      <F.Company>
        <F.Logo src={logo} alt="logo" />
        <F.Text>
          A new way to make the payments easy, reliable and secure.
        </F.Text>
      </F.Company>
      <F.NavSections>
        {footerLinks.map((footerLink, idx) => (
          <F.Container key={idx}>
            <F.Header>{footerLink.title}</F.Header>
            <F.NavList>
              {footerLink.links.map((link, idx) => (
                <F.NavLink
                  key={link.name}
                  marginBottom={
                    idx !== footerLink.links.length - 1
                      ? "var(--margin-sm)"
                      : "0"
                  }
                >
                  {link.name}
                </F.NavLink>
              ))}
            </F.NavList>
          </F.Container>
        ))}
      </F.NavSections>
    </F.WebsiteNav>
    <F.ExtraInfo>
      <F.Copyright>Copyright Ⓒ 2023 HooBank. All Rights Reserved.</F.Copyright>
      <F.Socials>
        {socialMedia.map((social, idx) => (
          <F.SocialIcon
            key={social.id}
            src={social.icon}
            alt={social.id}
            onClick={() => window.open(social.link)}
          />
        ))}
      </F.Socials>
    </F.ExtraInfo>
  </F.FooterStyled>
);

export { Footer };
