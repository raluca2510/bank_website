import React, { useState } from "react";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";

import * as N from "./styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <N.Nav>
      <N.Logo src={logo} />

      <N.Container>
        {/* Mobile */}
        <N.MenuIcon
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <N.MobileMenu>
            <N.NavList flexDirection="column">
              {navLinks.map((navLink, idx) => (
                <N.NavLink
                  key={idx}
                  textColor={
                    navLink.title === active
                      ? "var(--text-white)"
                      : "var(--text-dimwhite)"
                  }
                  marginBottom={idx !== navLinks.length - 1}
                  onClick={() => setActive(navLink.title)}
                >
                  <N.Link href={`#${navLink.id}`}>{navLink.title}</N.Link>
                </N.NavLink>
              ))}
            </N.NavList>
          </N.MobileMenu>
        )}

        {/* Desktop */}
        <N.DesktopMenu>
          <N.NavList flexDirection="row">
            {navLinks.map((navLink, idx) => (
              <N.NavLink
                key={idx}
                textColor={
                  navLink.title === active
                    ? "var(--text-white)"
                    : "var(--text-dimwhite)"
                }
                marginRight={idx !== navLinks.length - 1}
                onClick={() => setActive(navLink.title)}
              >
                <N.Link href={`#${navLink.id}`}>{navLink.title}</N.Link>
              </N.NavLink>
            ))}
          </N.NavList>
        </N.DesktopMenu>
      </N.Container>
    </N.Nav>
  );
};

export { Navbar };
