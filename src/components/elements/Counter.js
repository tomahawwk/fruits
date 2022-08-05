import React from 'react';
import styled from 'styled-components'
import Flex from '../helpers/Flex';

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
    }
`

const Counter = ({ count, onPlus, onMinus }) => {
    return (
        <StyledCounter align="stretch" gap="8px">
            <button onClick={onMinus}>-</button>
            <div>{count > 0 ? count : 0}</div>
            <button onClick={onPlus}>+</button>
        </StyledCounter>
    )
}

export default Counter;