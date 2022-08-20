import {FC} from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

import { Price, Counter, Button, Text } from '../elements/'

type BasketItemProps = {
    title: string;
    desktopImage: string;
    price: number;
    count: number;
    id: string;
}

const StyledBasketItem = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.grey2};
    padding: 15px 0;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 150px 150px 150px 100px;
    align-items: center;
    & > * {
        color: ${props => props.theme.colors.grey7};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.07em;
        display: flex;
        padding: 0 15px;
        &:not(:first-child) {
            justify-content: center;
        }
    }
    .counter > div {
        border: none;
    }
`

const StyledBasketItemHead = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 15px;
    img {
        width: 90px;
        height: 90px;
    }
    p {
        font-size: 12px;
        font-weight: 500;
        color: ${props => props.theme.colors.grey7};
    }
`

const BasketItem: FC<BasketItemProps> = ({ title, desktopImage, price, count, id }) => {
    const dispatch = useDispatch();

    const onRemove = () => {
        dispatch(removeItem(id))
    }

    const onCountPlus = () => {
        dispatch(addItem({ id } as CartItem))
    }
    const onCountMinus = () => {
        dispatch(minusItem(id))
    }

    return (
        <StyledBasketItem>
            <StyledBasketItemHead>
                <img src={ desktopImage } alt={ title }/>
                <Text uppercase={true}>{ title }</Text>
            </StyledBasketItemHead>
            <Price>{ price } €</Price>
            <div className='counter'>
                <Counter onPlus={onCountPlus} onMinus={onCountMinus} count={count} />
            </div>
            <Price>{ price * count } €</Price>
            <div><Button close={true} onClick={onRemove} width="20px" height="20px" /></div>
        </StyledBasketItem>
    )
}

export default BasketItem;