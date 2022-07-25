import React from 'react'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    width: 100%;
    min-height: 43vh;
    @media (max-width: ${props => props.theme.screen.desktop}){
        grid-template-columns: repeat(4, 1fr);
        min-height: 53vh;
    }
    @media (max-width: ${props => props.theme.screen.desktopMin}){
        grid-template-columns: repeat(3, 1fr);
        min-height: 57vh;
        grid-gap: 25px;
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-template-columns: initial;
        grid-gap: 12px;
        min-height: auto;
    }
`

const CardGrid = (props) => {
    return (
        <StyledCardGrid {...props}/>
    )
}

export default CardGrid;