import styled, { css } from 'styled-components'
import React, { useContext } from 'react';
import AppContext from '../../context';
import Section from './Section';

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 12;
    pointer-events: none;
`

const StyledMenuContent = styled(Section)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    transition-delay: 1s;
    z-index: 0;
    
    ${props => props.open && css`
        opacity: 1;
        pointer-events: all;
    `}
`

const StyledMenuClose = styled.button`
    position: fixed;
    top: 0;
    background: none;
    left: 0;
    width: 100%;
    height: 100%;
    width: 30px;
    height: 30px;
    &:before, &:after{
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.altLight}; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        content: '';
        bottom: 0;
        margin: auto;
        will-change: transform;
        transition-duration: .4s;
        transform-origin: left;
        transition-timing-function: cubic-bezier(.165,.84,.44,1);
    }
`

const Menu = (props) => {
    const { menuOpened } = useContext(AppContext);
    let menuShow = false;

    return (
        <StyledMenu>
            <StyledMenuContent open={menuOpened} grain>
                <StyledMenuClose show={menuShow} />
            </StyledMenuContent>
        </StyledMenu>
    )
}

export default Menu;