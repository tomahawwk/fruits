import React, {useState} from 'react';
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
        color: ${props => props.theme.colors.light};
    }
    button{
        align-self: center;
        ;
        background: none;
        color: ${props => props.theme.colors.light};
        border: none;
        font-size: 14px;
    }
`

const Counter = (props) => {
    const [count, setCount] = useState(1);

    const OnPlus = () => {
        
        setCount(count + 1);
    }

    const OnMinus = () => {
        if(count > 0)
            setCount(count - 1);
    }

    return (
        <StyledCounter {...props} align="stretch" gap="8px">
            <button onClick={OnMinus}>-</button>
            <div>{count}</div>
            <button onClick={OnPlus}>+</button>
        </StyledCounter>
    )
}

export default Counter;