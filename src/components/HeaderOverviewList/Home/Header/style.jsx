import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: transparent;
    color: black;
    padding: 1rem;
    /* box-shadow: ${props => props.theme.primaryShadow}; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NamePage = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    svg{
        font-size: 14px;
    }
`

export const Logo = styled.a`
    display: flex;
    align-items: center;
    img{
        margin-left: 1rem;
        width: 2rem;
    }
`

export const Profile = styled.a`
    svg{
        font-size: 2rem;    
    }
`