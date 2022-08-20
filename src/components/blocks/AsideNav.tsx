import styled from 'styled-components'
import Flex from '../helpers/Flex';
import { fluidRange } from 'polished'
import { FC } from 'react';
import { AsideAppear } from '../helpers/Animations';

import { Burger } from '../elements';

import { Socials } from './';

const StyledAsideNav = styled(Flex)`
    position: fixed;
    top: 0;
    z-index: 3;
    padding-bottom: 40px;
    left: 0;
    animation: ${AsideAppear} 1s ${props => props.theme.transition.function} forwards;
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
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: none;
    }
    
`

type MenuProps = {
    menuOpened: boolean;
    setMenuOpened: (active: boolean) => void;
};

const AsideNav: FC<MenuProps> = ({ menuOpened, setMenuOpened }) => {
    return (
        <StyledAsideNav justify="space-between" direction="column" height="100vh">
            <Burger click={() => setMenuOpened(!menuOpened)} />
            <Socials />
        </StyledAsideNav>
    )
}

export default AsideNav;
