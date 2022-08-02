import styled, {css} from 'styled-components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'
import { useEffect, useRef, useState } from 'react';

const StyledSort = styled.div`
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

const StyledSortPopup = styled.div`
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
    }
`

const StyledSortButton = styled.button`
    background: none;
    border: none;
    transition-duration: ${props => props.theme.transition.duration};
    color: ${props => props.theme.colors.grey5};
    white-space: nowrap;
    ${props => props.active && css`
        color: white;
    `}
    &:hover {
        color: white;
    }
`

export const sortOptions = [
    { label: "rating (highest)", value: 'rating' },
    { label: "rating (lowest)", value: '-rating' },
    { label: 'price (highest)', value: 'price' },
    { label: 'price (lowest)', value: '-price' },
    { label: 'alphabet (A-Z)', value: '-title' },
    { label: 'alphabet (Z-A)', value: 'title' }
];

const Sort = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const sortRef = useRef();
    const { sort } = useSelector(state => state.filter);

    const onClickItem = (obj) => {
        dispatch(setSort(obj));
        setOpen(false);
    }
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(!e.path.includes(sortRef.current))
                setOpen(false);
        }
        document.body.addEventListener("click", handleClickOutside);

        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <StyledSort ref={sortRef}>
            <span>Sort by:</span>
            <StyledSortLabel onClick={() => setOpen(!open)}>
                <span>{ sort.label }</span>
            </StyledSortLabel>
            <StyledSortPopup open={open}>
                <ul>
                    {sortOptions.map((item, index) => (<li key={index}>
                        <StyledSortButton onClick={() => onClickItem(item)} active={item.value === sort.value && true}>{item.label}</StyledSortButton>
                    </li>))}
                </ul>
            </StyledSortPopup>
        </StyledSort>
    )
}

export default Sort;