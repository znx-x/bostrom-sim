import styled from 'styled-components'

/* defaults */

export const BorderRadius = `16px`;
export const BorderColor = `rgba(255, 255, 255, 0.1)`;
export const DefaultTextFontSize = `0.9rem`;
export const PrimaryColor = `rgba(255, 255, 255, 0.15)`;
export const PrimaryColorDimmed = `rgba(255, 255, 255, 0.1)`;
export const PrimaryFontColor = `rgba(255, 255, 255, 1)`;
export const SecondaryColor = `rgba(255, 255, 255, 0.2)`;
export const SecondaryColorDimmed = `rgba(255, 255, 255, 0.15)`;

/* wrappers */

export const AppWrapper = styled.div`
    width: calc(100vw - 2rem);
    min-height: calc(100vh - 2rem);
    text-align: center;
    margin: 0 auto;
    padding: 1rem;
    background: rgba(22, 22, 22, 1);
    overflow-x: hidden;
`

export const PageWrapper = styled.div`
    max-width: 1320px;
    margin: auto;
    padding: auto;
`

// General Styles

export const ButtonWrapper = styled.a`
    text-decoration: none;
    cursor: pointer;
`

export const Button = styled.div`
    width: 320px;
    margin: 1rem;
    padding: 1rem 2rem;
    color: ${PrimaryFontColor};
    background: ${PrimaryColor};
    border-radius: ${BorderRadius};
    border: 1px solid ${BorderColor};
    &:hover {
        background: ${PrimaryColorDimmed};
    }
`