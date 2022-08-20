import React from 'react'
import styled from 'styled-components'

interface Props {
    width?: string;
    height?: string;
    direction?: string;
    align?: string;
    justify?: string;
    gap?: string;
}

const StyledFlex = styled.div<Props>`
    display: flex;
    width: ${props => props.width || 'initial'};
    height: ${props => props.height || 'initial'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    grid-gap: ${props => props.gap || 'initial'};
`

const Flex = (props) => {
    return <StyledFlex {...props} />
}

export default Flex;