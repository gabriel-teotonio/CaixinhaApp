import styled from "styled-components";


export const Container = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    box-shadow: ${props => props.theme.secundaryShadow};
`
export const GroupSecundaryTotals = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    h4{
        font-size: 14px;
    }
`   