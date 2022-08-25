import styled from 'styled-components'
import { FC, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/cart/slice';
import { getCartSelector } from '../../redux/cart/selectors';

import { BasketItem } from './';

import { Button, AnimatedWord, Text, Title, Link } from '../elements';
import { FadeY, FadeYUp } from '../helpers/Animations'
import { ArrowNextIcon } from '../elements/Icons';

interface Props {
    delay?: boolean;
    setDelay: (delay: boolean) => void;
}

interface StyledProps {
    delay?: boolean;
}

const StyledBasket = styled.div`
    min-height: 50vh;
`

const StyledBasketContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`

const StyledBasketHead = styled.div<StyledProps>`
    display: grid;
    grid-template-columns: 1fr 150px 150px 150px 100px;
    align-items: center;
    p {
        opacity: 0;
        animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
        color: white;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.07em;
        padding: 0 15px;
        display: flex;
        &:not(:first-child) {
            justify-content: center;
        }
        &:nth-child(1) {
            animation-delay: ${props => props.delay ? '1.3s' : '.1s'};
        }
        &:nth-child(2) {
            animation-delay: ${props => props.delay ? '1.4s' : '.2s'};
        }
        &:nth-child(3) {
            animation-delay: ${props => props.delay ? '1.5s' : '.3s'};
        }
        &:nth-child(4) {
            animation-delay: ${props => props.delay ? '1.6s' : '.4s'};
        }
        &:nth-child(5) {
            animation-delay: ${props => props.delay ? '1.7s' : '.5s'};
        }
    }
    @media (max-width: ${(props) => props.theme.screen.desktopMin}) {
        grid-template-columns: 1fr 100px 100px 100px 100px;
    }
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        display: none;
    }
`

const StyledBasketList = styled.ul<StyledProps>`
    display: flex;
    grid-gap: 15px; 
    list-style: none;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        z-index: 1;
    }
    li {
        opacity: 0;
        animation: ${FadeYUp} 1s ${props => props.theme.transition.timing} forwards;
        &:nth-child(1) {
            animation-delay: ${props => props.delay ? '1.5s' : '.3s'};
        }
        &:nth-child(2) {
            animation-delay: ${props => props.delay ? '1.6s' : '.4s'};
        }
        &:nth-child(3) {
            animation-delay: ${props => props.delay ? '1.7s' : '.5s'};
        }
        &:nth-child(4) {
            animation-delay: ${props => props.delay ? '1.8s' : '.6s'};
        }
        &:nth-child(5) {
            animation-delay: ${props => props.delay ? '1.9s' : '.7s'};
        }
    }
`

const StyledBasketFooter = styled.div`
    justify-content: flex-end;
    align-items: center;
    grid-gap: 25px;
    display: flex;
    & > div {
        display: flex;
        grid-gap: 20px;
        align-items: center;
    }
    p {
        color: white;
        font-size: 14px;
        font-weight: 500;
        span {
            color: ${props => props.theme.colors.yellow};
        }
    }
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        flex-direction: column-reverse;
        grid-gap: 15px;
    }
`

const StyledBasketTotal = styled.div<StyledProps>`
    display: none;
    border-radius: 4px;
    opacity: 0;
    background-color: ${props => props.theme.colors.grey};
    box-shadow: 0px 1px 7px rgba(0,0,0,.5);
    padding: 12px 10px;
    animation: ${FadeYUp} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.8s' : '.6s'};
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        display: block;
    }
`

const StyledBasketTotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 13px 0 10px;
    border-bottom: 1px solid rgba(255,255,255,.06);
    letter-spacing: 0.06em;
    &:first-child{
        padding-top: 0;
    }
    &:last-child{
        border-bottom: none;
        padding-bottom: 0;
    }
    span {
        color: ${props => props.theme.colors.yellow};
    }
`

const StyledBasketAnchor = styled.div`
    position: absolute;
    left: 0;
    top: -20vh;
`

const StyledBasketEmpty = styled.div<StyledProps>`
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    grid-gap: 20px;
    justify-content: center;
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        z-index: 2;
        grid-gap: 10px;
        padding-bottom: 30px;
    }
    img {
        width: 140px;
        opacity: 0;
        animation: ${FadeYUp} 1s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.5s' : '.3s'};
        @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
            width: 120px;
            margin: 50px 0 20px;
        }
    }
    div {
        font-size: 36px;
        opacity: 0;
        animation: ${FadeYUp} 1s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.6s' : '.4s'};
        &:first-letter {
            color: ${props => props.theme.colors.yellow};
            @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
                color: white;
            }
        }
        @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
            font-size: 20px;
        }
    }
    a{
        opacity: 0;
        animation: ${FadeYUp} 1s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.7s' : '.5s'};
    }
`

const Basket: FC<Props> = ({ delay, setDelay }) => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(getCartSelector);
    const anchor = useRef<HTMLDivElement>(null);

    const onClear = () => {
        anchor.current?.scrollIntoView({ block: "end", behavior: "smooth" });
        dispatch(clearItems());
        setDelay(false);
    }

    return (
        <StyledBasket>
            { items.length ?
                <StyledBasketContent>
                    <StyledBasketHead delay={delay}>
                        <Text uppercase={true}>Product</Text>
                        <Text uppercase={true}>Price</Text>
                        <Text uppercase={true}>Quantity</Text>
                        <Text uppercase={true}>Total</Text>
                        <Text uppercase={true}>Delete</Text>
                    </StyledBasketHead>
                    <StyledBasketList delay={delay}>
                        {items.map((item, index) => (
                            <li key={index}>
                                <BasketItem {...item}/>
                            </li>
                        ))}
                    </StyledBasketList>
                    <StyledBasketTotal delay={delay}>
                        <StyledBasketTotalRow>
                            <div>Subtotal</div>
                            <p>{ totalPrice }.00 <span>€</span></p>
                        </StyledBasketTotalRow>
                        <StyledBasketTotalRow>
                            <div>Delivery</div>
                            <p>26.00 <span>€</span></p>
                        </StyledBasketTotalRow>
                        <StyledBasketTotalRow>
                            <div>Total</div>
                            <p>{ totalPrice + 26 }.00 <span>€</span></p>
                        </StyledBasketTotalRow>
                    </StyledBasketTotal>
                    <StyledBasketFooter>
                        <Button outlined={true} animated={true} grey={true} onClick={onClear}>
                            <AnimatedWord text="Delete_all" />
                        </Button>
                        <Button outlined={true} animated={true}>
                            <AnimatedWord text={`Buy_for_${ totalPrice }_€`} />
                        </Button>
                    </StyledBasketFooter>
                </StyledBasketContent>
                :
                <StyledBasketEmpty delay={delay}>
                    <img src="/images/cart.png" />
                    <Title t2>Oops! Your cart is empty</Title>
                    <Link to="/catalog" arrow={+true}>
                        <span>Go to catalog</span>
                        <ArrowNextIcon />
                    </Link>
                </StyledBasketEmpty>
            }
            <StyledBasketAnchor ref={anchor} />
        </StyledBasket>
    )
}

export default Basket;