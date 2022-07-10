import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: none;
    font-size: 24px;
    resize: none;
    border: none;
    &:focus {
        outline: none;
    }
    @media ${props => props.theme.media.phone} {
        border: 1px solid red;
    }
`

const Console = ({color,...props }) => {
    const [lines, setLines] = useState(['C/Users/tomahawwk>'])

    const onKeyPress = e => {
        if(e.charCode == 13){
            setLines([...lines, 'C/Users/tomahawwk>'])
        }
    }

    return (
        <Flex width="100%">
            <Flex direction="column">
                {lines.map(line => 
                    <Line color={color}>{line}</Line>    
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}

export default Console
