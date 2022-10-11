import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    padding: 1rem;
    box-shadow: ${props => props.theme.primaryShadow};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.a`
    display: flex;
    align-items: center;
    img{
        margin-left: 1rem;
        width: 2rem;
    }
`