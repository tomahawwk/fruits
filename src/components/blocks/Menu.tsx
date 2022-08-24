import styled, { css } from 'styled-components'
import { setRouteAnimation } from '../../redux/animation/slice';
import { fluidRange } from 'polished'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

import Section from './Section';

import Link from '../elements/Link'

interface MenuStyledProps {
    show?: boolean;
    open?: boolean;
    first?: boolean;
}

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 12;
    pointer-events: none;
`

const StyledMenuContent = styled(Section)<MenuStyledProps>`
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
    @media (max-width: ${props => props.theme.screen.tablet}){
        background-color: ${props => props.theme.colors.grey3};
        padding-top: 80px;
        padding-bottom: 55px;
        ${props => fluidRange({
                prop: 'padding-left',
                fromSize: `${props.theme.unit.phone}px`,
                toSize: `${props.theme.unit.desktop}px`,
            },
            props.theme.screen.phone,
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
    }
`

const StyledMenuClose = styled.button<MenuStyledProps>`
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
        transition-duration: ${props => props.theme.transition.duration};
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
    @media (max-width: ${props => props.theme.screen.tablet}){
        left: initial;
        width: 20px;
        height: 20px;
        top: 22px;
        ${props => fluidRange({
            prop: 'right',
            fromSize: `${props.theme.unit.phone}px`,
            toSize: `${props.theme.unit.desktop}px`,
            },
            props.theme.screen.phone,
            props.theme.screen.desktop,
        )}
    }
`

const StyledMenuList = styled.ul<MenuStyledProps>`
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
    @media (max-width: ${props => props.theme.screen.tablet}){
        grid-gap: 15px;
    }
    li {
        width: fit-content;
        position: relative;
        &:nth-child(1){
            a{
                transition-delay: 1.6s;
            }
        }
        &:nth-child(2){
            a{
                transition-delay: 1.5s;
            }
        }
        &:nth-child(3){
            a{
                transition-delay: 1.4s;
            }
        }
        &:nth-child(4){
            a{
                transition-delay: 1.3s;
            }
        }
        &:nth-child(5){
            a{
                transition-delay: 1.2s;
            }
        }
        &.is-active {
            pointer-events: none;
            @media (max-width: ${props => props.theme.screen.tablet}){
                a:before {
                    transform: scaleX(1);
                }
            }
            div{
                color: ${props => props.theme.colors.grey5};
                text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
                @media (max-width: ${props => props.theme.screen.tablet}){
                    color: white;
                }
            }
            span:first-child{
                transition-duration: ${props => props.theme.transition.duration};
                color: ${props => props.theme.colors.yellow};
                text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
                @media (max-width: ${props => props.theme.screen.tablet}){
                    text-shadow: none;
                    color: ${props => props.theme.colors.yellow};
                }
            }
        }
        a {
            transform: translateY(-60px);
            transition-duration: .6s;
            opacity: 0;
            display: block;
            div{
                display: block;
                text-transform: uppercase;
                ${props => fluidRange({
                        prop: 'font-size',
                        fromSize: `30px`,
                        toSize: `72px`,
                    },
                    props.theme.screen.phone,
                    props.theme.screen.desktop,
                )}
                font-weight: 700;
                color: ${props => props.theme.colors.grey3};
                transition-duration: ${props => props.theme.transition.duration};
                letter-spacing: 0.03em;
                text-shadow: 0 -1px 1px ${props => props.theme.colors.grey5}, -1px 0 1px ${props => props.theme.colors.grey5}, 0 1px 1px ${props => props.theme.colors.grey5}, 1px 0 1px ${props => props.theme.colors.grey5};
                @media (max-width: ${props => props.theme.screen.tablet}){
                    text-shadow: none;
                    color: white;
                    font-weight: 300;
                    letter-spacing: 0.08em;
                }
            }
            @media (max-width: ${props => props.theme.screen.tablet}){
                &:before {
                    content: '';
                    position: absolute;
                    transform-origin: left;
                    width: 100%;
                    height: 1px;
                    background: rgba(255,255,255,.15);
                    left: 0;
                    bottom: -3px;
                    transform: scaleX(0);
                    transition-duration: ${props => props.theme.transition.duration};
                    transition-timing-function: ${props => props.theme.transition.function};
                }
            }
            span:first-child{
                transition-duration: .1s;
                text-shadow: 0 -1px 1px ${props => props.theme.colors.yellow}, -1px 0 1px ${props => props.theme.colors.yellow}, 0 1px 1px ${props => props.theme.colors.yellow}, 1px 0 1px ${props => props.theme.colors.yellow};
                @media (max-width: ${props => props.theme.screen.tablet}){
                    text-shadow: none;
                    color: ${props => props.theme.colors.yellow};
                }
            }
            &:hover {
                div{
                    color: ${props => props.theme.colors.grey5};
                    text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
                    @media (max-width: ${props => props.theme.screen.tablet}){
                        color: white;
                    }
                }
                span:first-child{
                    transition-duration: ${props => props.theme.transition.duration};
                    color: ${props => props.theme.colors.yellow};
                    text-shadow: 0 -1px 1px transparent, -1px 0 1px transparent, 0 1px 1px transparent, 1px 0 1px transparent;
                    @media (max-width: ${props => props.theme.screen.tablet}){
                        text-shadow: none;
                    }
                }
            }
        }
    }
    ${props => props.open && css`
        li a {
            transform: translateY(0);
            opacity: 1;
        }          
    `}
`

const StyledMenuContacts = styled.ul`
    max-width: 500px;
    align-self: flex-end;
    display: grid;
    grid-gap: 25px;
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: none;
    }
`

const StyledMenuContact = styled.li<MenuStyledProps>`
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
    b, p {
        transform: translateY(-20px);
        opacity: 0;
        transition-duration: .6s;
    }
    &:nth-child(1){
        b{
            transition-delay: 1.7s;
        }
        p{
            transition-delay: 1.6s;
        }
    }
    &:nth-child(2){
        b {
            transition-delay: 1.5s;
        }
        p {
            transition-delay: 1.4s;
        }
    }
    ${props => props.open && css`
        b, p {
            transform: translateY(0);
            opacity: 1;
        }
    `}
`

const StyledMenuSymbol = styled.span<MenuStyledProps>`
    ${props => props.first && css`
        transition-duration: .1s;
        text-shadow: 0 -1px 1px ${props => props.theme.colors.yellow}, -1px 0 1px ${props => props.theme.colors.yellow}, 0 1px 1px ${props => props.theme.colors.yellow}, 1px 0 1px ${props => props.theme.colors.yellow};
    `}
`

const Menu = ({ menuOpened, setMenuOpened }) => {
    const dispatch = useDispatch();
    const links = [
        { title: "home page", url: "" },
        { title: "catalog", url: "catalog" },
        { title: "articles", url: "articles" },
        { title: "cart", url: "cart" },
    ]

    let menuShow = false;
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const linkHandler = () => {
        setMenuOpened(false);
    }

    const onCloseMenu = () => {
        dispatch(setRouteAnimation(true));
        setMenuOpened(!menuOpened);
        setTimeout(() => {
            dispatch(setRouteAnimation(false));
        }, 2000)
    }

    return (
        <StyledMenu>
            <StyledMenuContent open={menuOpened} grain>
                <StyledMenuClose show={menuShow} onClick={onCloseMenu}/>
                <StyledMenuList open={menuOpened}>
                    {
                        links.map((link, index) => 
                            <li className={splitLocation[1] === link.url ? "is-active" : ""} key={index}>
                                <Link to={`/${link.url}`} onClick={() => {linkHandler()}}>
                                    <div>
                                        {
                                            Array.from(link.title).map((el, index) => 
                                                <StyledMenuSymbol first={index === 0 && true} key={index}>{ el }</StyledMenuSymbol>
                                            )
                                        }
                                    </div>
                                </Link>
                            </li> 
                        )
                    }
                </StyledMenuList>
                <StyledMenuContacts>
                    <StyledMenuContact open={menuOpened}>
                        <b>Phone</b>
                        <p>8 (951) 667 59 73</p>
                    </StyledMenuContact>
                    <StyledMenuContact open={menuOpened}>
                        <b>Location</b>
                        <p>15, Begovaya, St. Petersburg</p>
                    </StyledMenuContact>
                </StyledMenuContacts>
            </StyledMenuContent>
        </StyledMenu>
    )
}

export default Menu;