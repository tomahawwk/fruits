import React, { useCallback, useState } from 'react';
import styled from 'styled-components'
import { debounce } from 'lodash'
const StyledSearch = styled.button`
    
`

const Search = ({ setSearchValue }) => {
    const [value, setValue] = useState('');
    
    const updateSearchValue = useCallback(debounce((str) => {
        setSearchValue(str)
    }, 600), []);

    const onChangeInput = (e) => {
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