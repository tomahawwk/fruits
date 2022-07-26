import styled from 'styled-components'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'

const StyledSort = styled(Dropdown)`
    
`

const options = [
    { label: "rating (desc)", value: 'rating' },
    { label: "rating (asc)", value: '-rating' },
    { label: 'price (desc)', value: 'price' },
    { label: 'price (asc)', value: '-price' },
    { label: 'alphabet (desc)', value: 'title' },
    { label: 'alphabet (asc)', value: '-title' }
];

const Sort = ({ value, onChangeSort}) => {
    const dispatch = useDispatch();

    return (
        <Dropdown options={options} onChange={(e) => dispatch(setSort(e))} placeholder={options[0].name} />
    )
}

export default Sort;