import React, { useLayoutEffect, useContext } from 'react'
import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";
import AppContext from '../../../context';

import Title from '../../elements/Title';
import Text from '../../elements/Text';
import Button from '../../elements/Button';
import Counter from '../../elements/Counter';
import Price from '../../elements/Price';
import AnimatedWord from '../../elements/AnimatedWord';

import Flex from '../../helpers/Flex';

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
`

const StyledCardImage = styled.div`
    overflow: hidden;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledCardContent = styled(Flex)`
    padding: 20px;
    width: 100%;
`

const StyledCardFooterRow = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 6fr;
    grid-gap: 10px;
    align-items: end;
    button{
        & > *{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
`

const Card = (props) => {
    const { isLoading } = useContext(AppContext);

    const timeout = {
        appear: 0,
        enter: 700,
        exit: 700,
    } 

    return (
        <CSSTransition in={!isLoading} appear={true} timeout={timeout}>
            <StyledCard style={{ transitionDelay: `${props.index * 50}ms` }}>
                <StyledCardImage>
                    <img src={ props.image }/>
                </StyledCardImage>
                <StyledCardContent direction="column" justify="space-between">
                    <Flex direction="column" gap="10px">
                        <Title>{ props.title }</Title>
                        <Text clamp="2">{ props.description }</Text>
                    </Flex>
                    <Flex direction="column" gap="20px">
                        <StyledCardFooterRow>
                            <Flex align="end" gap="10px">
                                <Price>{ props.price }$</Price>
                                <Price old>{ props.oldprice }$</Price>
                            </Flex>
                            <Text uppercase>Price for 1 pound</Text>
                        </StyledCardFooterRow>
                        <StyledCardFooterRow>
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