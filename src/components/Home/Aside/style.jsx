import styled from "styled-components";


export const Container = styled.aside`
    background-color: ${props => props.theme.primaryColor};
    padding: 1rem 0;
`
export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem;
    height: 100%;
` 
export const MenuItem = styled.li`
    a{
        transition: ease .3s;
        transform: scale(0.9);
        display: flex;
        align-items: center;
        color: white;
        padding: .5rem;
        &:hover{
            background: ${props => props.theme.colorMenuItem};
            border-radius: 4px;
            transform: scale(1);
            span{
                margin-left: 1rem;
            }
        }
        &.active{
            background: ${props => props.theme.colorMenuItem};
            border-radius: 4px;
            transform: scale(1);
            span{
                margin-left: 1rem;
            }
        }
    }
    span{
        transition: 400ms ease;
        font-size: 14px;
        margin-left: .6rem;
    }
    svg{
        font-size: 1.5rem;
    }
    :last-child{
        margin-top: auto;
        margin-left: auto;
        a{
            background: transparent;
            transform: scale(1);
            &:hover{
                svg{
                    filter: brightness(70%);
                }
            }
        }
    }   
`