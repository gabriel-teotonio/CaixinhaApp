import styled from "styled-components";


export const Container = styled.li`
        text-align: center;
        background-color: white;
        color: #000000a8;
        border-radius: 4px;  
        box-shadow: ${props => props.theme.secundaryShadow};
        width: 250px;
        max-width: 100%;
`
export const Heading = styled.p`
    border-bottom: 1px solid;
    padding: .4rem;
`
export const TransactionMouth = styled.h2`
    margin: 10px;
`

