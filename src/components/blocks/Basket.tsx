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
`

const StyledBasketList = styled.ul`
    display: flex;
    grid-gap: 15px; 
    list-style: none;
    flex-direction: column;
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