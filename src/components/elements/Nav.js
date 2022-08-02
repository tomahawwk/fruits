import React from 'react'
import styled, { css } from 'styled-components'

import Link from './Link';
import BasketLink from './BasketLink';
import AnimatedWord from './AnimatedWord';

const StyledNav = styled.ul`
    display: flex;
    grid-gap: 50px; 
    list-style: none;
    ${props => props.footer && css`
        a{
            color: rgba(255,255,255,.5);
            transition-duration: ${props => props.theme.transition.duration};;
            &:hover {
                color: white;
            }
        }
    `}
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: none;
    }
`

const Nav = (props) => {
    return (
        <StyledNav {...props}>
            <li>
                <Link to="/catalog" primary="true">
                    <AnimatedWord text="Catalog" />
                </Link>
            </li>
            <li>
                <Link to="/articles" primary="true">
                    <AnimatedWord text="Articles" />
                </Link>
            </li>
            
            {!props.footer &&
                <li>
                    <BasketLink />
                </li>
            }
        </StyledNav>
    )
}

export default Nav;