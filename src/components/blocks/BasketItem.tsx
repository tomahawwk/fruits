import {FC} from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';
import Flex from '../helpers/Flex'

import { Price, Counter, Button, Text, Picture } from '../elements/'

type BasketItemProps = {
    title: string;
    desktopImage: string;
    phoneImage: string;
    price: number;
    oldprice: number;
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
    @media (max-width: ${(props) => props.theme.screen.desktopMin}) {
        grid-template-columns: 1fr 100px 100px 100px 100px;
    }
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        grid-template-columns: 1fr 80px 80px 80px 80px;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        height: 120px;
        grid-template-rows: auto;
        border-radius: 4px;
        overflow: hidden;
        background-color: ${props => props.theme.colors.grey};
        box-shadow: 0px 1px 7px rgba(0,0,0,.5);
        grid-template-columns: 100px 1fr;
        align-items: flex-start;
        padding: 0;
    }
    & > * {
        color: ${props => props.theme.colors.grey7};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.07em;
        display: flex;
        padding: 0 15px;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
        &:not(:first-child) {
            justify-content: center;
            @media (max-width: ${props => props.theme.screen.tabletMin}){
                justify-content: space-between;
            }
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
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-gap: 0;
        padding: 10px;
        height: 100%;
    }
    picture {
        width: 90px;
        height: 90px;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            width: 80px;
            height: 100%;
        }
    }
    p {
        font-size: 12px;
        font-weight: 500;
        color: ${props => props.theme.colors.grey7};
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    }
`

const StyledBasketItemMobileContent = styled.div`
    display: none;
    padding: 10px 10px 12px;
    flex-direction: column;
    height: 100%;
    .title {
        font-size: 16px;
        color: #FFF;
        font-weight: 400;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: flex;
    }
`

const BasketItem: FC<BasketItemProps> = ({ title, desktopImage, price, count, id, phoneImage, oldprice }) => {
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
                <Picture desktop={desktopImage} phone={phoneImage} alt={title} />
                <Text uppercase={true}>{ title }</Text>
            </StyledBasketItemHead>
            <Price>{ price } €</Price>
            <div className='counter'>
                <Counter onPlus={onCountPlus} onMinus={onCountMinus} count={count} />
            </div>
            <Price>{ price * count } €</Price>
            <div><Button close={true} onClick={onRemove} width="20px" height="20px" /></div>
            <StyledBasketItemMobileContent>
                <Flex direction="column">
                    <Text uppercase={true} className="title">{ title }</Text>
                    <Flex align="end" gap="10px">
                        <Price>{ price } €</Price>
                        <Price old>{ oldprice } €</Price>
                    </Flex>
                </Flex>
                <Counter onPlus={onCountPlus} onMinus={onCountMinus} count={count} />                
            </StyledBasketItemMobileContent>
        </StyledBasketItem>
    )
}

export default BasketItem;