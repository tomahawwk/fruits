import styled from 'styled-components'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react'

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
    return (
        <Dropdown options={options} onChange={(e) => onChangeSort(e)} placeholder={options[0].name} />
    )
}

export default Sort;