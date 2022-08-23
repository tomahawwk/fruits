import { useState, useEffect, useRef, FC } from 'react'
import styled, { css } from 'styled-components'
import { Sort } from '../../redux/filter/types'
import { clearFilters } from '../../redux/filter/slice';
import { useAppDispatch } from '../../redux/store';

import { SortDropdown, Categories } from './'

import { OptionsIcon, ClearIcon } from '../elements/Icons'
import { Button } from '../elements'

import { FadeYDown } from '../helpers/Animations'

interface FiltersProps {
    categoriesValue: number;
    onChangeCategory: (index: string) => void;
    sort: Sort;
}

interface FilterPopupProps {
    active?: boolean;
}
const StyledMobileFilters = styled.div``

const StyledMobileFiltersButton = styled(Button)`
  opacity: 0;
  animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
  animation-delay: .5s;
  z-index: 1;
  min-width: 37px;
  min-height: 37px;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 15px;
    height: 15px;
  }
`

const StyledMobileFiltersClear = styled(Button)`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: ${props => props.theme.colors.grey5};
    svg {
        fill: black;
        width: 20px;
        height: 20px;
    }
`

const StyledMobileFiltersPopup = styled.div<FilterPopupProps>`
    position: absolute;
    top: 47px;
    left: 0;
    width: calc(100vw - 32px);
    padding: 15px;
    z-index: 13;
    background-color: ${props => props.theme.colors.grey};
    border-radius: 4px;
    box-shadow: 0px 1px 7px rgba(0,0,0,.7);
    opacity: 0;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timing};
    transform: translateY(15px);
    display: flex;
    grid-gap: 25px;
    flex-direction: column;
    pointer-events: none;
    ${props => props.active && css`
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    `}
`
             
const StyledMobileFiltersPopupPart = styled.div`
    display: flex;
    grid-gap: 7px;
    flex-direction: column;
    & > p{
        color: ${props => props.theme.colors.yellow};
        font-size: 12px;
        font-weight: 500;
    }
`

const MobileFilters:FC<FiltersProps> = ({ sort, categoriesValue, onChangeCategory }) => {
    const [active, setActive] = useState<boolean>(false);
    const popup = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const activeHandler = () => {
        setActive(!active);
    }

    const clearFiltersHandler = () => {
        dispatch(clearFilters());
        setTimeout(() => {
            activeHandler();
        }, 400)
    }
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(popup.current && !e.composedPath().includes(popup.current))
                setActive(false);
        }
        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <StyledMobileFilters ref={popup}>
            <StyledMobileFiltersButton quad={true} onClick={activeHandler}>
                <OptionsIcon />
            </StyledMobileFiltersButton>
            <StyledMobileFiltersPopup active={active}>
                <StyledMobileFiltersClear quad={true} onClick={clearFiltersHandler}>
                    <ClearIcon />
                </StyledMobileFiltersClear>
                <StyledMobileFiltersPopupPart>
                    <p>Category:</p>
                    <Categories value={categoriesValue} onChangeCategory={onChangeCategory} customChangeEvent={activeHandler} />
                </StyledMobileFiltersPopupPart>
                <StyledMobileFiltersPopupPart>
                    <p>Sort by:</p>
                    <SortDropdown mobile={true} select={sort} customChangeEvent={activeHandler} />
                </StyledMobileFiltersPopupPart>
            </StyledMobileFiltersPopup>
        </StyledMobileFilters>
    )
}

export default MobileFilters;