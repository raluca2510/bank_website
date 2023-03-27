import styled from "styled-components";

export const CTAStyled = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--margin-4);
    margin: var(--margin-3) 0;
    padding: var(--padding-4) var(--padding-2);
    border-radius: 2rem;
    background: var(--bg-black-gradient-2);
    box-shadow; var(--box-shadow);

    @media (min-width: 768px) {
        flex-direction: row;
        padding: var(--padding-4);
        margin-bottom: 6rem;
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--margin-sm);
`

export const Heading = styled.h2`
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    color: var(--text-white);

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

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`