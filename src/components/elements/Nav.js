import React from 'react'
import styled, { css } from 'styled-components'

import Button from './Button';
import { BasketIcon } from './Icons';
import Link from './Link';
import AnimatedWord from './AnimatedWord';

const StyledNav = styled.ul`
    display: flex;
    grid-gap: 50px; 
    list-style: none;
    ${props => props.footer && css`
        a{
            color: rgba(255,255,255,.5);
            transition-duration: .4s;
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
                <Link to="/catalog" primary>
                    <AnimatedWord text="Catalog" />
                </Link>
            </li>
            <li>
                <Link to="/articles" primary>
                    <AnimatedWord text="Articles" />
                </Link>
            </li>
            
            {!props.footer &&
                <li>
                    <Button icon>
                        <BasketIcon />
                    </Button>
                </li>
            }
        </StyledNav>
    )
}

export default Nav;