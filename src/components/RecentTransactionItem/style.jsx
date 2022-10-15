import styled from "styled-components";


export const Container = styled.li`
    border-bottom: #00000049 1px solid;
    padding: 1rem;
    border-radius: 0 0 4px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContentItem = styled.div``
export const ContentItemName = styled.div``
export const ContentTypeTransaction = styled.span`
    font-size: 14px;
    color: #000000c4;
`
export const IconTransaction = styled.div`
    color: ${props => props.typeTransaction === 'payment'? '#00dd97':'#ff4e4e'};
`