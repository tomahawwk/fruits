import React, { useContext } from 'react'
import styled from 'styled-components'
import Flex from '../helpers/Flex';
import { fluidRange } from 'polished'
import AppContext from '../../context';

import Burger from '../elements/Burger';

import Socials from './Socials';

const StyledAsideNav = styled(Flex)`
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 2;
    padding-bottom: 40px;
    left: 0;
    background: ${props => props.theme.colors.grey3};
    ${props => fluidRange({
       prop: 'width',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
    &:before{
        content: '';
        position: absolute;
        height: 100%;
        top: 0;
        z-index: 1;
        right: 0;
        width: 1px;
        background-color: ${props => props.theme.colors.grey};
    }
`

const AsideNav = (props) => {
    const { menuOpened, setMenuOpened } = useContext(AppContext);
    return (
        <StyledAsideNav justify="space-between" direction="column">
            <Burger click={() => setMenuOpened(!menuOpened)} />
            <Socials />
        </StyledAsideNav>
    )
}

export default AsideNav;
