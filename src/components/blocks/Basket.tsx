import styled from 'styled-components'
import {FC} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/cart/slice';
import { getCartSelector } from '../../redux/cart/selectors';

import { BasketItem } from './';

import { Button, AnimatedWord, Text } from '../elements';

const StyledBasket = styled.div`
    min-height: 50vh;
`

const StyledBasketContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`

const StyledBasketHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 150px 150px 150px 100px;
    align-items: center;
    p {
        color: white;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.07em;
        padding: 0 15px;
        display: flex;
        &:not(:first-child) {
            justify-content: center;
        }
    }
    @media (max-width: ${(props) => props.theme.screen.desktopMin}) {
        grid-template-columns: 1fr 100px 100px 100px 100px;
    }
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        display: none;
    }
`

const StyledBasketList = styled.ul`
    display: flex;
    grid-gap: 15px; 
    list-style: none;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        z-index: 1;
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
`

const StyledBasketTotal = styled.div`
    display: none;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.grey};
    box-shadow: 0px 1px 7px rgba(0,0,0,.5);
    padding: 12px 10px;
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

const StyledBasketEmpty = styled.div`

`

const Basket: FC = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(getCartSelector);

    const onClear = () => {
        dispatch(clearItems());
    }

    return (
        <StyledBasket>
            { items.length ?
                <StyledBasketContent>
                    <StyledBasketHead>
                        <Text uppercase={true}>Product</Text>
                        <Text uppercase={true}>Price</Text>
                        <Text uppercase={true}>Quantity</Text>
                        <Text uppercase={true}>Total</Text>
                        <Text uppercase={true}>Delete</Text>
                    </StyledBasketHead>
                    <StyledBasketList>
                        {items.map((item, index) => (
                            <li key={index}>
                                <BasketItem {...item}/>
                            </li>
                        ))}
                    </StyledBasketList>
                    <StyledBasketTotal>
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
                <StyledBasketEmpty>
                    
                </StyledBasketEmpty>
            }
        </StyledBasket>
    )
}

export default Basket;