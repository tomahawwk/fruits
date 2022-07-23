import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    b {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 600;
        font-size: 28px;
    }
    p{
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 32px;
        color: ${props => props.theme.colors.yellow};
    }

    ${props => props.row && css`
        flex-direction: row;
        grid-gap: 20px;
        p{
            color: white;
        }
    `}
`

const Logo = (props) => {
    return (
        <StyledLogo {...props} to="/">
            <b>React</b>
            <p>Fruits</p>
        </StyledLogo>
    )
}

export default Logo;