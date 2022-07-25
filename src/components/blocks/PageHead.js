import React from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'

import Section from './Section';

import Title from '../elements/Title';
import Link from '../elements/Link'

const StyledPageHead = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 30px;
    justify-content: center;
    height: 45vh;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        height: auto;
        padding: 70px 0 10px;
    }
`

const StyledPageHeadTitle = styled(Title)`
    text-align: center;
    position: relative;
    width: fit-content;
    &:before{
        color: ${props => props.theme.colors.yellow};
        font-family: ${props => props.theme.fonts.secondary};
        content: 'Goods';
        position: absolute;
        top: -20px;
        font-size: 32px;
        right: 15%;
        font-weight: 300;
        opacity: .7;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        font-weight: 400;
        font-size: 16px;
        &:first-letter{
            color: ${props => props.theme.colors.yellow};  
        }
    }
`

const StyledPageHeadPart = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    p{
        color: white;
        font-weight: 400;
        font-size: 14px;
        color: rgba(255,255,255,.7);
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: none;
    }
`

const PageHead = (props) => {
    return (
        <StyledPageHead grain>
            <StyledPageHeadTitle t1>{ props.title }</StyledPageHeadTitle>
            <StyledPageHeadPart>
                <p>{props.back.name} / {props.next.name}</p>
            </StyledPageHeadPart>
        </StyledPageHead>
    )
}

export default PageHead;