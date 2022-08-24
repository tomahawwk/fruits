import styled, {css} from 'styled-components'
import {FC, memo} from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../../redux/filter/slice'
import { SortValueEnum, Sort } from '../../redux/filter/types'
import { useEffect, useRef, useState } from 'react';

import { FadeYDown } from '../helpers/Animations'

interface SortProps {
    select: Sort;
    mobile?: boolean;
    customChangeEvent?: () => void;
    delay?: boolean;
}

interface SortStyledProps {
    active?: boolean;
    open?: boolean;
    delay?: boolean;
}

const StyledSortDropdown = styled.div<SortStyledProps>`
    opacity: 0;
    z-index: 11;
    animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
    animation-delay: ${props => props.delay ? '2s' : '.6s'};
    display: flex;
    grid-gap: 7px;
    align-items: center;
    font-weight: 500;
    position: relative;
    & > span {
        color: ${props => props.theme.colors.yellow};
    }
`

const StyledSortLabel = styled.button`
    color: white;
    font-weight: 500;
    color: ${props => props.theme.colors.grey5};
    background: none;
    transition-duration: ${props => props.theme.transition.duration};;
    position: relative;
    &:before, &:after{
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        background: ${props => props.theme.colors.grey};
        width: 100%;
        height: 1px;
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.timingFunction};
        transform-origin: left;
    }
    &:after {
        background: ${props => props.theme.colors.grey5};
        transform: scaleX(0);
    }
    &:hover {
        color: white;
        &:after{
            transform: scaleX(1);
        }
    }
`

const StyledSortPopup = styled.div<SortStyledProps>`
    position: absolute;
    top: 40px;
    right: 0;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 2px 7px rgba(0,0,0,.2);
    background-color: ${props => props.theme.colors.grey2};
    z-index: 11;
    opacity: 0;
    transform: translateY(10px);
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timingFunction};
    pointer-events: none;
    border: 1px solid ${props => props.theme.colors.grey};
    ${props => props.open && css`
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    `}
    ul{
        display: grid;
        grid-gap: 7px;
        list-style: none;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: flex;
            flex-wrap: wrap;
            grid-gap: 4px 9px;
        }
    }
    li {
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            &:first-child {
                button {
                    text-transform: initial;
                }
            }
            &:not(:last-child){
                &:after{
                    content: ',';
                    color: ${props => props.theme.colors.grey5};
                }
            }
        }
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        opacity: 1;
        transform: translateY(0px);
        position: static;
        pointer-events: all;
        padding: 0;
        border: none;
        background: none;
        box-shadow: none;
    }
`

const StyledSortButton = styled.button<SortStyledProps>`
    background: none;
    border: none;
    transition-duration: ${props => props.theme.transition.duration};
    color: ${props => props.theme.colors.grey5};
    white-space: nowrap;
    text-transform: lowercase;
    ${props => props.active && css`
        color: white;
    `}
    &:hover {
        color: white;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        font-size: 12px;
    }
`

type SortItem = {
    label: string;
    value: SortValueEnum;
}

export const sortOptions: SortItem[] = [
    { label: "Rating (highest)", value: SortValueEnum.RATING_DESC },
    { label: "Rating (lowest)", value: SortValueEnum.RATING_ASC },
    { label: 'Price (highest)', value: SortValueEnum.PRICE_DESC },
    { label: 'Price (lowest)', value: SortValueEnum.PRICE_ASC },
    { label: 'Alphabet (A-Z)', value: SortValueEnum.ALPHABET_DESC },
    { label: 'Alphabet (Z-A)', value: SortValueEnum.ALPHABET_ASC }
];

const SortDropdown: FC<SortProps> = memo(({ select, mobile, customChangeEvent, delay }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const sortRef = useRef<HTMLDivElement>(null);

    const onClickItem = (obj: SortItem) => {
        dispatch(setSort(obj));
        setOpen(false);
        if(customChangeEvent){
            setTimeout(() => {
                customChangeEvent();
            }, 400)
        }
    }
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(sortRef.current && !e.composedPath().includes(sortRef.current) && !mobile)
                setOpen(false);
        }
        document.body.addEventListener("click", handleClickOutside);

        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <StyledSortDropdown ref={sortRef} delay={delay}>
            {!mobile && <>
                <span>Sort by:</span>
                <StyledSortLabel onClick={() => setOpen(!open)}>
                    <span>{ select.label }</span>
                </StyledSortLabel>
            </>}
            <StyledSortPopup open={open}>
                <ul>
                    {sortOptions.map((item, index) => (<li key={index}>
                        <StyledSortButton onClick={() => onClickItem(item)} active={item.value === select.value && true}>{item.label}</StyledSortButton>
                    </li>))}
                </ul>
            </StyledSortPopup>
        </StyledSortDropdown>
    )
});

export default SortDropdown;