import {FC} from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom' 
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, minusItem } from '../../redux/cart/slice';
import { getCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import { getFruitsSelector } from '../../redux/fruits/selectors';

import { 
    Title,
    Text,
    Button,
    Counter,
    Price,
    AnimatedWord,
    Picture 
} from '../elements/';

import Flex from '../helpers/Flex';

type CardProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    oldprice: number;
    phoneImage: string;
    desktopImage: string;
    index: number;
}

interface CardStyledProps {
    desktop?: boolean;
    clamp?: number;
    active?: boolean;
}

const StyledCard = styled.div`
    width: 100%;
    z-index: 10;
    height: 43vh;
    position: relative;
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

const StyledCardImage = styled(Link)`
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
        padding: 12px;
    }
`

const StyledCardFooterRow = styled.div<CardStyledProps>`
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 6fr;
    grid-gap: 10px;
    align-items: end;
    button{
        & > * {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
    & > p {
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    }
    ${props => props.desktop && css`
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    `}
`

const StyledCardContentHead = styled(Link)`
    display: flex;
    grid-gap: 10px;
    flex-direction: column;
    text-decoration: none;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-gap: 5px;
    }
`

const StyledCardButton = styled(Button)<CardStyledProps>`
    position: relative;
    & > span {
        right: 15px;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        background-color: ${props => props.theme.colors.grey2};
        color: white;
        border-radius: 100%;
        width: 24px;
        height: 24px;
        left: initial;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.function};
    }
    & > div {
        transition-duration: .6s;
        transition-timing-function: ${props => props.theme.transition.function};
    }
    ${props => props.active && css`
        border: 1px solid ${props.theme.colors.yellow};
        background: ${props.theme.colors.yellow};
        will-change: initial;
        color: black;
        font-weight: 600;
        & > div {
            transform: translateX(-30px);
            & > div div{
                &:last-child{
                    span {
                        transform: skewX(0) translateY(-100%);
                    }
                }
                &:first-child{
                    span {
                        transform: skewX(0deg) translateY(-100%);
                    }
                }
            }
        }
        
        & > span {
            animation: counterAnimate .5s ease-in-out forwards;
        }
    `}
    @keyframes counterAnimate {
        0% { transform: scale(0) }
        80% { transform: scale(1.05) }
        100% { transform: scale(1) }
    }
`

const StyledCardMobileButton = styled(Button)`
    position: absolute;
    right: 15px;
    bottom: 12px;
    display: none;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: flex;
    }
`

const Card: FC<CardProps> = ({
    id,
    title,
    phoneImage,
    index,
    description,
    desktopImage,
    price,
    oldprice}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(getCartItemById(id));
    const { isLoading } = useSelector(getFruitsSelector);
    const count = cartItem ? cartItem.count : 0; 

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            desktopImage,
            phoneImage,
            count: 0,
            oldprice,
            description
        };
        dispatch(addItem(item));
    }

    const onCountMinus = () => {
        dispatch(minusItem(id))
    }

    const timeout = {
        appear: 600,
        enter: 600,
        exit: 600,
    } 
    
    return (
        <CSSTransition in={!isLoading} appear={true} timeout={timeout}>
            <StyledCard style={{ transitionDelay: `${index * 50}ms` }}>
                <StyledCardImage to={`/catalog/${id}`}>
                    <Picture desktop={desktopImage} phone={phoneImage} alt={title} />
                </StyledCardImage>
                <StyledCardContent direction="column" justify="space-between" gap="10px">
                    <StyledCardContentHead to={`/catalog/${id}`}>
                        <Title>{ title }</Title>
                        <Text clamp="2">{ description }</Text>
                    </StyledCardContentHead>
                    <Flex direction="column" gap="20px">
                        <StyledCardFooterRow>
                            <Flex align="end" gap="10px">
                                <Price>{ price } €</Price>
                                <Price old>{ oldprice } €</Price>
                            </Flex>
                            <Text uppercase>Price for 1 pound</Text>
                        </StyledCardFooterRow>
                        <StyledCardFooterRow desktop={true}>
                            <Counter onPlus={onClickAdd} onMinus={onCountMinus} count={count} />
                            <StyledCardButton outlined={true} animated={true} onClick={onClickAdd} active={count > 0 && true}>
                                <AnimatedWord text={count > 0 ? "ADD_MORE" : "ADD_TO_CART"} />
                                { count > 0 && <span>{ count }</span> }
                            </StyledCardButton>
                        </StyledCardFooterRow>
                        <StyledCardMobileButton onClick={onClickAdd} quad={true} plus={true} />
                    </Flex>
                </StyledCardContent>
            </StyledCard>
        </CSSTransition>
    )
}

export default Card;