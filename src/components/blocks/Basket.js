import styled, {css} from 'styled-components'
import React from 'react'
import Text from '../elements/Text'
import Price from '../elements/Price'
import Counter from '../elements/Counter';
import Button from '../elements/Button';

const StyledBasket = styled.div`

`

const StyledBasketHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 150px 150px 150px 120px;
    align-items: center;
    margin-bottom: 20px;
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

const StyledBasketItem = styled.li`
    width: 100%;
    background: ${props => props.theme.colors.grey2};
    padding: 15px 0;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 150px 150px 150px 120px;
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
    .counter {
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

const Basket = () => {
    const goods = [
        { title: "All" },
        { title: "Fruits" },
        { title: "Exotic fruits" },
        { title: "Berries" },
    ]

    return (
        <StyledBasket>
            <StyledBasketHead>
                <Text uppercase="true">Product</Text>
                <Text uppercase="true">Price</Text>
                <Text uppercase="true">Quantity</Text>
                <Text uppercase="true">Total</Text>
                <Text uppercase="true">Delete</Text>
            </StyledBasketHead>
            <StyledBasketList>
                {goods.map((item, index) => (
                    <StyledBasketItem key={index}>
                        <StyledBasketItemHead>
                            <img src="images/cards/1.jpg" alt="123"/>
                            <Text uppercase="true">{item.title}</Text>
                        </StyledBasketItemHead>
                        <Price>45$</Price>
                        <Counter className="counter" />
                        <Price>125$</Price>
                        <div><Button close="true" /></div>
                    </StyledBasketItem>
                ))};
            </StyledBasketList>
        </StyledBasket>
    )
}

export default Basket;