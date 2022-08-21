import {FC} from 'react';
import styled from 'styled-components'
import Flex from '../helpers/Flex';

type CounterProps = {
    count: number;
    onPlus: () => void;
    onMinus: () => void;
}

const StyledCounter = styled(Flex)` 
    height: calc(100% + 2px);
    margin-top: -1px;
    border: 1px solid ${props => props.theme.colors.grey};
    padding: 15px 20px;
    justify-content: center;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        width: fit-content;
        padding: 0;
        height: auto;
    }
    div{
        align-self: center;
        font-size: 11px;
        font-weight: 500;
        display: block;
        color: ${props => props.theme.colors.light};
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            font-size: 10px;
        }
    }
    
    button{
        align-self: center;
        background: none;
        color: ${props => props.theme.colors.light};
        border: none;
        font-size: 14px;
        transition-duration: .4s;
        &:disabled {
            pointer-events: none;
            opacity: .5;
        }
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            transition-duration: ${props => props.theme.transition.duration};
            transition-timing-function: ${props => props.theme.transition.function};
            width: 30px;
            height: 30px;
            background: ${props => props.theme.colors.yellow};
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            text-align: center;
            box-shadow: 0px 2px 6px rgba(0,0,0,.2);
            font-size: 28px;
            font-weight: 300;
            line-height: 0;
            padding: 0 0 2px;
            will-change: transform;
            &:active {
                transform: scale(1.2);
            }
            &:first-child {
                padding: 0 0 8px;
            }
        }
    }
`

const StyledCounterText = styled.span`
    display: none;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: inline;
    }
`

const Counter:FC<CounterProps> = ({ count, onPlus, onMinus }) => {
    return (
        <StyledCounter align="stretch" gap="8px">
            <button disabled={count === 1} onClick={onMinus}>-</button>
            <div><StyledCounterText>Add to </StyledCounterText>{count > 0 ? count : 0}</div>
            <button onClick={onPlus}>+</button>
        </StyledCounter>
    )
}

export default Counter;