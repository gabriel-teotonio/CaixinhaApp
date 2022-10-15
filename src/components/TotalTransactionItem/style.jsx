import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background: ${props => props.typeBgColor};
    color: white;
    padding: 1rem;
    border-radius: 4px;
    h4{
        font-size: 1.5rem;
        font-weight: 500;
    }
`