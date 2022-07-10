import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div`
    font-size: 24px;
`

const Line = (props) => {
    return <StyledLine {...props} />
}

export default Line
