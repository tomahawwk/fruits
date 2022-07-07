import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    b {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 600;
        font-size: 32px;
    }
    p{
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 40px;
    }
`

const Logo = (props) => {
    return (
        <StyledLogo to="/">
            <b>React</b>
            <p>Fruits</p>
        </StyledLogo>
    )
}

export default Logo;