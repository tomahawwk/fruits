import { useCallback, useState, FC, useRef } from 'react';
import styled, {css} from 'styled-components'
import { debounce } from 'lodash'

import { SearchIcon} from '../elements/Icons'
import { Button } from '../elements'

import { FadeYDown } from '../helpers/Animations'

interface SearchProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

interface StyledSearchProps {
    active: boolean;
}

const StyledSearch = styled.div`
    opacity: 0;
    z-index: 1;
    animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.function};
    input {
        background: none;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        color: white;
        position: absolute;
        opacity: 0;
        pointer-events: none;
        transition-duration: inherit;
        transition-timing-function: inherit;
        top: -2px;
        left: 25px;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            opacity: 1;
            pointer-events: all;
            position: static;
            font-size: 12px;
            color: black;
        }
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        background: white;
        width: 100%;
        border-radius: 4px;
        box-shadow: 0px 1px 7px rgba(0,0,0,.5);
        animation-delay: .4s;
        height: 37px;
    }
`

const StyledSearchButton = styled.button`
    background: none;
    transition-duration: inherit;
    transition-timing-function: inherit;
    stroke: ${props => props.theme.colors.grey5};
    position: relative;
    svg{
        width: 100%;
        height: 100%;
    }
    &:hover {
        stroke: ${props => props.theme.colors.yellow};
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        width: 16px;
        height: 16px;
        pointer-events: none;
    }
`

const StyledSearchClear = styled(Button)`
    position: absolute;
    top: 2px;
    right: 0;
    width: 8px;
    height: 9px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-5px);
    transition-delay: 0s;
    transition-duration: inherit;
    transition-timing-function: inherit;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: none;
    }
`

const StyledSearchInner = styled.div<StyledSearchProps>`
    width: 20px;
    height: 20px;
    transition-duration: inherit;
    transition-timing-function: inherit;
    position: relative;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        width: 100%;
        display: flex;
        grid-gap: 10px;
        align-items: center;
        padding: 0 10px;
        height: 100%;
    }
    ${props => props.active && css`
        width: 150px;
        input {
            opacity: 1;
            pointer-events: all;
        }
        button:last-child{
            opacity: 1;
            pointer-events: all;
            transform: translateY(0px);
            transition-delay: .3s;
        }
    `}
    &:before {
        content: '';
        left: 24px;
        bottom: -2px;
        width: calc(100% - 24px);
        height: 1px;
        position: absolute;
        background: rgba(255,255,255,.1);
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    }
`

const Search: FC<SearchProps> = ({ setSearchValue }) => {
    const [value, setValue] = useState('');
    const [active, setActive] = useState<boolean>(false);
    const input = useRef<HTMLInputElement>(null);
    const searchOnClick = () => {
        setActive(!active);
        if(input.current)
            input.current.focus();
    }

    const searchOnClear = () => {
        setActive(false);
        if(input.current){
            setSearchValue("")
            setValue("");
        }
    }
    
    const updateSearchValue = useCallback(debounce((str) => {
        setSearchValue(str)
    }, 600), []);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }

    return (
        <StyledSearch>
            <StyledSearchInner active={active}>
                <StyledSearchButton onClick={searchOnClick}>
                    <SearchIcon />
                </StyledSearchButton>
                <input ref={input} value={value} onChange={(e) => onChangeInput(e)} placeholder="Search" />
                <StyledSearchClear onClick={searchOnClear} close={true} />
            </StyledSearchInner>
            
        </StyledSearch>
    )
}

export default Search;