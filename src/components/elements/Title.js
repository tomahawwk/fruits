import React from 'react'
import styled, {css} from 'styled-components'

const StyledTitle = styled.div.attrs(props => ({ t1: true }))`
    color: ${props => props.color || props.theme.colors.light};
    text-transform: uppercase;
    ${props => props.t1 && css`
        
    `}
`

const Title = (props) => {
    return <StyledTitle {...props} />
}

export default Title;