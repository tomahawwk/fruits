import React from 'react'
import styled, { css } from 'styled-components'
import { CSSTransition } from "react-transition-group";

import Title from '../elements/Title';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Counter from '../elements/Counter';
import Price from '../elements/Price';
import AnimatedWord from '../elements/AnimatedWord';
import Picture from '../elements/Picture';
import { useSelector } from 'react-redux'

import Flex from '../helpers/Flex';

const StyledCard = styled.div`
    width: 100%;
    z-index: 10;
    height: 43vh;
    display: grid;
    background-color: ${props => props.theme.colors.grey2};
    grid-template-rows: repeat(2, 1fr);
    opacity: 0;
    transition-duration: .6s;
    transition-timing-function: ease;
    transform: translate(0px, 30px);
    &.enter {
        opacity: 0;
    }
    &.enter-active, &.enter-done {
        opacity: 1;
        transform: translate(0px);
    }
    &.exit {
        opacity: 1;
    }
    &.exit-active {
        opacity: 0;
    }
    @media (max-width: ${props => props.theme.screen.desktop}){
        height: 53vh;
    }
    @media (max-width: ${props => props.theme.screen.desktopMin}){
        height: 57vh;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-template-columns: 100px auto;
        height: 130px;
        grid-template-rows: auto;
        border-radius: 4px;
        overflow: hidden;
        background-color: ${props => props.theme.colors.grey};
        box-shadow: 0px 1px 7px rgba(0,0,0,.5);
        transform: translate(20px, 0px);
    }
    @media (max-width: ${props => props.theme.screen.phone}){
        grid-template-columns: 90px auto;
        height: 120px;
    }
`

const StyledCardImage = styled.div`
    overflow: hidden;
    width: 100%;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        padding: 10px;    
    }
    img {
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            object-fit: contain;
        }
    }
`

const StyledCardContent = styled(Flex)`
    padding: 20px;
    width: 100%;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        padding: 12px 15px;
    }
`

const StyledCardFooterRow = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 6fr;
    grid-gap: 10px;
    align-items: end;
    button{
        & > * {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
    ${props => props.desktop && css`
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    `}
`

const StyledCardContentHead = styled.div`
    display: flex;
    grid-gap: 10px;
    flex-direction: column;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-gap: 5px;
    }
`

const Card = (props) => {
    const timeout = {
        appear: 0,
        enter: 700,
        exit: 500,
    } 
    const loading = useSelector(state => state.filter.loading);
    return (
        <CSSTransition in={!loading} appear={true} timeout={timeout}>
            <StyledCard style={{ transitionDelay: `${props.index * 50}ms` }}>
                <StyledCardImage>
                    <Picture desktop={props.desktopImage} phone={props.phoneImage} alt={props.title} />
                </StyledCardImage>
                <StyledCardContent direction="column" justify="space-between" gap="10px">
                    <StyledCardContentHead>
                        <Title>{ props.title }</Title>
                        <Text clamp="2">{ props.description }</Text>
                    </StyledCardContentHead>
                    <Flex direction="column" gap="20px">
                        <StyledCardFooterRow>
                            <Flex align="end" gap="10px">
                                <Price>{ props.price }$</Price>
                                <Price old>{ props.oldprice }$</Price>
                            </Flex>
                            <Text uppercase>Price for 1 pound</Text>
                        </StyledCardFooterRow>
                        <StyledCardFooterRow desktop>
                            <Counter />
                            <Button outlined>
                                <AnimatedWord text="ADD_TO_CART" />
                            </Button>
                        </StyledCardFooterRow>
                    </Flex>
                </StyledCardContent>
            </StyledCard>
        </CSSTransition>
    )
}

export default Card;