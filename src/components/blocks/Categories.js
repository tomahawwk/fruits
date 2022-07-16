import styled, {css} from 'styled-components'
import React from 'react'

const StyledCategories = styled.ul`
    display: flex;
    grid-gap: 20px; 
    list-style: none;
    margin-bottom: 20px;
`

const StyledCategory = styled.li`
    padding: 5px;
    border: none;
    cursor: pointer;
    background: none;
    color: ${props => props.theme.colors.grey5};
    ${props => props.active && css`
        color: ${props => props.theme.colors.light};
    `}
`

const Categories = ({ value, onChangeCategory }) => {

    const categories = [
        { title: "All" },
        { title: "Fruits" },
        { title: "Exotic fruits" },
        { title: "Berries" },
    ]

    return (
        <StyledCategories>
            {categories.map((category, index) => (
                <StyledCategory
                    key={`category-${index}`}
                    onClick={() => onChangeCategory(index)}
                    active={value === index ? true : false}
                    >{category.title}</StyledCategory>
            ))}
        </StyledCategories>
    )
}

export default Categories;