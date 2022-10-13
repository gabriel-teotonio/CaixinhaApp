import styled from "styled-components";

export const Container = styled.div`
`
export const RecentTransactionList = styled.ul`
        display: flex;
        flex-direction: column;
        gap: .5rem;    
        margin-top: 1rem;
        background-color: white;    
        border-radius: 4px;
`
export const RecentTransactionItem = styled.li`
    border-bottom: #00000049 1px solid;
    padding: 1rem;
    &:last-child{
        border: none;
    }
`