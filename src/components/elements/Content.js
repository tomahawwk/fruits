import React from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledContent = styled.div`
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}

    ${props => fluidRange({
       prop: 'padding-right',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}

    width: 100%;
`

const Content = (props) => {
    return (
        <StyledContent {...props}/>
    )
}

export default Content;
