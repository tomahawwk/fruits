import React from 'react'
import styled from 'styled-components'

import Button from './Button';
import { BasketIcon } from './Icons';
import Link from './Link';
import AnimatedWord from './AnimatedWord';

const StyledNav = styled.ul`
    display: flex;
    grid-gap: 50px; 
    list-style: none;
`

const Nav = (props) => {
    return (
        <StyledNav>
            <li>
                <Link to="/catalog">
                    <AnimatedWord text="Catalog" />
                </Link>
            </li>
            <li>
                <Link to="/articles">
                    <AnimatedWord text="Articles" />
                </Link>
            </li>
            <li>
                <Button icon>
                    <BasketIcon />
                </Button>
            </li>
        </StyledNav>
    )
}

export default Nav;