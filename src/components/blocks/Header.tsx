import styled, {css} from 'styled-components'
import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCount } from '../../redux/cart/selectors';

import Flex from '../helpers/Flex';
import { FadeY } from '../helpers/Animations';
import { fluidRange } from 'polished'

import Logo from '../elements/Logo';
import Nav from '../elements/Nav';
import Burger from '../elements/Burger';

interface StyledHeaderProps {
    active?: boolean;
}

const StyledHeader = styled(Flex)`
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${Number(props.theme.unit.tablet) + Number(props.theme.navSize.tablet)}px`,
       toSize: `${Number(props.theme.unit.desktop) + Number(props.theme.navSize.desktop)}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}

    ${props => fluidRange({
       prop: 'padding-right',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    ${props => fluidRange({
       prop: 'height',
       fromSize: `${props.theme.headerSize.phone}px`,
       toSize: `${props.theme.headerSize.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}
    @media (max-width: ${props => props.theme.screen.tablet}){
        ${props => fluidRange({
            prop: 'padding-left',
            fromSize: `${props.theme.unit.phone}px`,
            toSize: `${props.theme.unit.desktop}px`,
            },
            props.theme.screen.phone,
            props.theme.screen.desktop,
        )}
    }
`

const StyledHeaderMobileBurger = styled(Burger)`
    display: none;
    animation: ${FadeY} 1s ${props => props.theme.transition.function} forwards;
    animation-delay: .2s;
    opacity: 0;
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: flex;
    }
`

const StyledHeaderMobileCounter = styled.div<StyledHeaderProps>`
    display: none;
    animation: ${FadeY} 1s ${props => props.theme.transition.function} forwards;
    animation-delay: .3s;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 18px;
    height: 18px;
    opacity: 0;
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: flex;
    }
    span {
        top: 0px;
        right: 0px;
        position: absolute;
        font-size: 10px;
        color: black;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        background: ${props => props.theme.colors.yellow};
        transform: scale(0);
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.timing};
        display: flex;
    }
    ${props => props.active && css`
        span {
            transform: scale(1);
        }
    `}
`

type MenuProps = {
    menuOpened: boolean;
    setMenuOpened: (active: boolean) => void;
};

const Header:FC<MenuProps> = ({ menuOpened, setMenuOpened }) => {
    const totalCount = useSelector(getTotalCount);
    return (
        <StyledHeader justify="space-between" align="center" gap="20px" width="100%">
            <Logo />
            <Nav />
            <StyledHeaderMobileBurger click={() => setMenuOpened(!menuOpened)}/>
            <StyledHeaderMobileCounter active={totalCount > 0 && true}>
                <span>{ totalCount > 0 && totalCount }</span>
            </StyledHeaderMobileCounter>
        </StyledHeader>
    )
}

export default Header;
