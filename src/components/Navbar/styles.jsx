import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-2) 0;
`

export const Logo = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt
}))`
    width: 7rem;
    height: 2rem;
`

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`

export const MenuIcon = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt
}))`
    width: 1.75rem;
    height: 1.75rem;
    object-fit: contain;

    @media (min-width: 640px) {
        display: none;
    }
`

export const MobileMenu = styled.div`
    min-width: 10rem;
    background: var(--bg-black-gradient);
    padding: var(--padding-2);
    position: absolute;
    right: var(--margin-right);
    top: 6rem;
    border-radius: 1rem;
    z-index: 1;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media (min-width: 640px) {
        display: none;
    }
` 

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: ${props => props.flexDirection};
    list-style-type: none;
`

export const NavLink = styled.li`
    font-weight: 500;
    color: ${props => props.textColor};
    margin-bottom: ${props => props.marginBottom ? 'var(--marginY-sm)' : '0'};
    margin-right: ${props => props.marginRight ? 'var(--padding-3);' : '0'};

    &:hover {
        cursor: pointer;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

export const DesktopMenu = styled.div`
    
    display: none;

    @media (min-width: 640px) {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
    }
`