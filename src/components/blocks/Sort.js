import styled from 'styled-components'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'

const StyledSort = styled(Dropdown)`
    
`

export const sortOptions = [
    { label: "rating (desc)", value: 'rating' },
    { label: "rating (asc)", value: '-rating' },
    { label: 'price (desc)', value: 'price' },
    { label: 'price (asc)', value: '-price' },
    { label: 'alphabet (desc)', value: 'title' },
    { label: 'alphabet (asc)', value: '-title' }
];

const Sort = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown options={sortOptions} onChange={(e) => dispatch(setSort(e))} placeholder={sortOptions[0].name} />
    )
}

export default Sort;