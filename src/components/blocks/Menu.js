import styled, { css } from 'styled-components'
import React from 'react';
import Section from './Section';

import Link from '../elements/Link'

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
    grid-gap: 5vw;
    pointer-events: none;
    transition-delay: 1s;
    z-index: 0;
    padding: 150px 100px 100px;
    display: flex;
    justify-content: space-between;
    ${props => props.open && css`
        opacity: 1;
        pointer-events: all;
    `}
`

const StyledMenuClose = styled.button`
    position: fixed;
    top: 40px;
    background: none;
    left: 40px;
    width: 100%;
    height: 100%;
    width: 30px;
    height: 30px;
    border: none;
    transition-duration: .6s;
    transition-timing-function: ease;
    z-index: 2;
    &:before, &:after {
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.grey5}; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        content: '';
        bottom: 0;
        margin: auto;
        will-change: transform;
        transition-duration: .4s;
        transition-timing-function: cubic-bezier(.165,.84,.44,1);
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }

    &:hover {
        transform: scale(.8);
        &:before, &:after{
            background-color: white;
        }
    }
`

const StyledMenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 2;
    display: grid;
    width: fit-content;
    grid-gap: 10px;
    align-items: flex-start;
    height: fit-content;
    a {
        overflow: hidden;
        span{
            text-transform: uppercase;
            font-size: 72px;
            font-weight: 700;
            color: ${props => props.theme.colors.grey3};
            display: inline-block;
            transition-duration: .4s;
            letter-spacing: 0.03em;
            text-shadow: 0 -1px 1px ${props => props.theme.colors.grey5}, -1px 0 1px ${props => props.theme.colors.grey5}, 0 1px 1px ${props => props.theme.colors.grey5}, 1px 0 1px ${props => props.theme.colors.grey5};
        }
        b{
            transition-duration: .1s;
            text-shadow: 0 -1px 1px ${props => props.theme.colors.yellow}, -1px 0 1px ${props => props.theme.colors.yellow}, 0 1px 1px ${props => props.theme.colors.yellow}, 1px 0 1px ${props => props.theme.colors.yellow};
        }
        &:hover {
            span{
                color: ${props => props.theme.colors.grey5};
                text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
                
            }
            b{
                transition-duration: .4s;
                color: ${props => props.theme.colors.yellow};
                text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
            }
        }
    }
`

const StyledMenuContacts = styled.ul`
    max-width: 500px;
    align-self: flex-end;
    display: grid;
    grid-gap: 25px;
`

const StyledMenuContact = styled.li`
    display: grid;
    grid-gap: 10px;
    b{
        color: white;
        font-size: 22px;
    }
    p{
        font-size: 18px;
        color: ${props => props.theme.colors.grey5}
    }
`

const Menu = ({ menuOpened, setMenuOpened }) => {
    let menuShow = false;

    return (
        <StyledMenu>
            <StyledMenuContent open={menuOpened} grain>
                <StyledMenuClose show={menuShow} onClick={() => setMenuOpened(!menuOpened)}/>
                <StyledMenuList>
                    <li><Link to="/catalog"><span><b>C</b>atalog</span></Link></li> 
                    <li><Link to="/articles"><span><b>A</b>rticles</span></Link></li> 
                    <li><Link to="/"><span><b>H</b>ome</span></Link></li>
                </StyledMenuList>
                <StyledMenuContacts>
                    <StyledMenuContact>
                        <b>Phone</b>
                        <p>8 (951) 667 59 73</p>
                    </StyledMenuContact>
                    <StyledMenuContact>
                        <b>Location</b>
                        <p>15, Begovaya, St. Petersburg</p>
                    </StyledMenuContact>
                </StyledMenuContacts>
            </StyledMenuContent>
        </StyledMenu>
    )
}

export default Menu;