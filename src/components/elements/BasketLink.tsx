import {FC, useEffect, useRef} from 'react'
import styled, { css } from 'styled-components'

import { BasketIcon } from './Icons';

import Link from './Link';
import { useSelector } from 'react-redux';
import { getCartSelector, getTotalCount } from '../../redux/cart/selectors';

interface Props {
    active?: boolean;
}

const StyledBasketLink = styled(Link)`
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.function};
    svg{
        transition-duration: inherit;
        transition-timing-function: inherit;
        will-change: transform;
    }
    &:hover {
        transform: scale(1.2);
        svg {
            fill: ${props => props.theme.colors.yellow};
        }
        span {
            opacity: 0;
            transform: translateY(-5px);
        }
    }
    &:active {
        transform: scale(1);
    }
`

const StyledBasketLinkCounter = styled.span<Props>`
    position: absolute;
    will-change: transform;
    font-size: 11px;
    font-weight: 600;
    top: -11px;
    text-align: center;
    right: -11px;
    color: ${props => props.theme.colors.yellow};
    opacity: 0;
    pointer-events: none;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.function};
    transform: translateY(-5px);
    ${props => props.active && css`
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
    `}
`

const BasketLink: FC = () => {
    const { items } = useSelector(getCartSelector);
    const totalCount = useSelector(getTotalCount);
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current){
            const json = JSON.stringify(items);
            localStorage.setItem('basket', json)
        }
        isMounted.current = true;
    }, [items])

    return (
        <StyledBasketLink to="/cart" icon={+true}>
            <BasketIcon />
            <StyledBasketLinkCounter active={totalCount > 0 && true}>{ totalCount > 0 && totalCount }</StyledBasketLinkCounter>
        </StyledBasketLink>
    )
}

export default BasketLink;