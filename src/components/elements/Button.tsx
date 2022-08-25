import styled, {css} from 'styled-components'

interface Props {
    outlined?: boolean;
    close?: boolean;
    animated?: boolean;
    grey?: boolean;
    quad?: boolean;
    align?: string;
    width?: string;
    height?: string;
    plus?: boolean;
    minus?: boolean;
}
  
export default styled.button<Props>`
    will-change: transform;
    border: none;
    position: relative;
    background: none;
    white-space: nowrap;
    width: ${props => props.width};
    height: ${props => props.height};
    align-self: ${props => props.align};
    ${props => props.outlined && css`
        font-size: 11px;
        white-space: nowrap;
        transition-duration: ${props => props.theme.transition.duration};
        color: ${props.theme.colors.light};
        text-transform: uppercase;
        background-color: transparent;
        font-weight: 400;
        border: 1px solid ${props => props.theme.colors.grey5};
        &:hover {
            color: ${props => props.theme.colors.black};
            font-weight: 600;
            background-color: ${props => props.theme.colors.yellow};
            border: 1px solid ${props => props.theme.colors.yellow};
            @media (max-width: ${props => props.theme.screen.tablet}){
                border: none;
                & span {
                    transition: none;
                    transform: translateY(0);
                }
            }
        }
        @media (max-width: ${props => props.theme.screen.tablet}){
            font-size: 9px;
            width: 100%;
            border: none;
            border-radius: 4px;
            background-color: ${props => props.theme.colors.yellow};
            box-shadow: 0px 1px 7px rgba(0,0,0,.5);
            color: black;
            font-weight: 600;
            & span {
                transition: none;
                will-change: initial;
                transform: translateY(0);
            }
        }
    `}
    ${props => props.plus && css`
        &:before, &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 14px;
            height: 2px;
            background-color: ${props => props.theme.colors.grey2};
        }
        &:after{
            width: 2px;
            height: 14px;
        }
    `}
    ${props => props.close && css`
        position: relative;
        background: none;
        border: none;
        display: block;
        padding: 0;
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.function};
        &:before, &:after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition-timing-function: inherit;
            transition-duration: inherit;
            margin: auto;
            background-color: ${props => props.theme.colors.grey7};
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
        &:hover {
            transform: scale(1.2);
            &:before, &:after {
                background-color: white;
            }
        }
        &:active {
            transform: scale(.9);
        }
    `}
    ${props => props.animated && css`
        padding: 0;
        & > div {
            position: relative;
            padding: 16px 35px 15px;
        }
    `}
    ${props => props.grey && css`
        color: ${props.theme.colors.grey5};
        border: 1px solid ${props.theme.colors.grey2}; 
        @media (max-width: ${props => props.theme.screen.tablet}){
            background-color: ${props => props.theme.colors.grey};
            color: white;
            font-weight: 500;
            &:hover {
                font-weight: 500;
                color: white;
                background-color: rgba(0,0,0,.05);
            }
        }
    `}
    ${props => props.quad && css`
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.function};
        width: 30px;
        height: 30px;
        background: ${props.theme.colors.yellow};
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-align: center;
        box-shadow: 0px 2px 6px rgba(0,0,0,.2);
        font-size: 28px;
        font-weight: 300;
        line-height: 0;
        will-change: transform;
        &:active {
            transform: scale(1.2);
        }
    `}
`;