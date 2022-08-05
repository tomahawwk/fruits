import React from 'react'
import styled from 'styled-components'

import Section from './Section';

import Title from '../elements/Title';
import Link from '../elements/Link'
import { ArrowPrevIcon, ArrowNextIcon } from '../elements/Icons'

import Flex from '../helpers/Flex'

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
        background: none;
        &:before{
            display: none;
        }
    }
    & > * {
        z-index: 2;
    }
`

const StyledPageHeadTitle = styled(Title)`
    text-align: center;
    position: relative;
    width: fit-content;
    span{
        color: ${props => props.theme.colors.yellow};
        font-family: ${props => props.theme.fonts.secondary};
        position: absolute;
        top: -20px;
        font-size: 32px;
        left: 60%;
        font-weight: 300;
        white-space: nowrap;
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
    a, span{
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
            <StyledPageHeadTitle t1>{ props.title } <span>{ props.subtitle }</span></StyledPageHeadTitle>
            <StyledPageHeadPart>
                <Flex justify="center" gap="3px">
                    <Link to={props.back.url}>{props.back.name}</Link>
                    <span>/</span>
                    <Link to={props.next.url}>{props.next.name}</Link>
                </Flex>
                <Flex justify="center" gap="15px">
                    <Link to={props.back.url} arrow="true"><ArrowPrevIcon /></Link>
                    <Link to={props.next.url} arrow="true"><ArrowNextIcon /></Link>
                </Flex>
            </StyledPageHeadPart>
        </StyledPageHead>
    )
}

export default PageHead;