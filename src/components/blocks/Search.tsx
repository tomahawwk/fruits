import React, { useCallback, useState, FC } from 'react';
import styled from 'styled-components'
import { debounce } from 'lodash'
const StyledSearch = styled.div`
    width: 300px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.grey2};
    input {
        background: none;
        width: 100%;
        border: none;
        text-align: left;
        padding: 10px 0;
        outline: none;
        color: white;
    }
`

interface SearchProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const Search: FC<SearchProps> = ({ setSearchValue }) => {
    const [value, setValue] = useState('');
    
    const updateSearchValue = useCallback(debounce((str) => {
        setSearchValue(str)
    }, 600), []);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }

    return (
        <StyledSearch>
            <input value={value} onChange={(e) => onChangeInput(e)} placeholder="Search fruit" />
        </StyledSearch>
    )
}

export default Search;