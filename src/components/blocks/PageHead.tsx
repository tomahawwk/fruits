import { FC } from 'react'
import styled from 'styled-components'

import Section from './Section';

import Title from '../elements/Title';
import Link from '../elements/Link'
import { ArrowPrevIcon, ArrowNextIcon } from '../elements/Icons'

import Flex from '../helpers/Flex'
import { MoveY, FadeYDown } from '../helpers/Animations'

interface Props {
    title?: string;
    subtitle?: string;
    background: string;
    back: { url: string; name: string; };
    next: { url: string; name: string; };
    delay?: boolean;
}

interface StyledProps {
    delay?: boolean;
}

const StyledPageHead = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 30px;
    justify-content: center;
    height: 45vh;
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        padding: 70px 0 40px;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        margin-bottom: -40px;
        height: auto;
        background: none;
        &:before{
            display: none;
        }
        &:after{
            background: linear-gradient(to top, #141416, rgba(0,0,0,.6));
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 1;
            height: 100%;
        }
    }
    & > * {
        z-index: 2;
    }
`

const StyledPageHeadTitle = styled(Title)<StyledProps>`
    text-align: center;
    position: relative;
    width: fit-content;
    div {
        line-height: 120%;
        transform: translateY(-100%);
        animation: ${MoveY} 1s ${props => props.theme.transition.function} forwards;
        animation-delay: ${props => props.delay ? '1.5s' : '.1s'};
    }
    b, span {
        overflow: hidden;
        display: block;
    }
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
        div {
            animation-delay: ${props => props.delay ? '1.7s' : '.3s'};
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

const StyledPageHeadPart = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    a, span{
        color: white;
        font-weight: 400;
        font-size: 14px;
        color: rgba(255,255,255,.7);
    }
    div {
        opacity: 0;
        animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
        animation-delay: ${props => props.delay ? '1.8s' : '.4s'};
        &:last-child {
            animation-delay: ${props => props.delay ? '1.9s' : '.5s'};
        }
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: none;
    }
`
const StyledPageHeadBackground = styled.img`
    display: none;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
    }
`

const PageHead: FC<Props> = ({title, subtitle, back, next, background, delay}) => {
    return (
        <StyledPageHead grain>
            <StyledPageHeadBackground src={background} />
            <StyledPageHeadTitle t1={true} delay={delay}>
                <b><div>{ title }</div></b>
                <span><div>{ subtitle }</div></span>
            </StyledPageHeadTitle>
            <StyledPageHeadPart delay={delay}>
                <Flex justify="center" gap="3px">
                    <Link to={back.url}>{back.name}</Link>
                    <span>/</span>
                    <Link to={next.url}>{next.name}</Link>
                </Flex>
                <Flex justify="center" gap="15px">
                    <Link to={back.url} arrowicon={+true}><ArrowPrevIcon /></Link>
                    <Link to={next.url} arrowicon={+true}><ArrowNextIcon /></Link>
                </Flex>
            </StyledPageHeadPart>
        </StyledPageHead>
    )
}

export default PageHead;