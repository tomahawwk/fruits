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
    
    div{
        align-self: center;
        font-size: 11px;
        font-weight: 500;
        display: block;
        color: ${props => props.theme.colors.light};
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
    }
`

const Counter:FC<CounterProps> = ({ count, onPlus, onMinus }) => {
    return (
        <StyledCounter align="stretch" gap="8px">
            <button disabled={count === 1} onClick={onMinus}>-</button>
            <div>{count > 0 ? count : 0}</div>
            <button onClick={onPlus}>+</button>
        </StyledCounter>
    )
}

export default Counter;