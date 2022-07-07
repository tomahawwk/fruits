import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
    display: flex;
    width: ${props => props.width || 'auto'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    grid-gap: ${props => props.gap || 'initial'};
`

const Flex = (props) => {
    return <StyledFlex {...props} />
}

export default Flex;