import React from 'react'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    width: 100%;
`

const CardGrid = (props) => {
    return (
        <StyledCardGrid {...props} />
    )
}

export default CardGrid;
