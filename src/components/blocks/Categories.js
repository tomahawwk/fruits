import styled, {css} from 'styled-components'
import React, {useState} from 'react'

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

const Categories = (props) => {
    const [activeCategory, setActiveCategory] = useState(0);
    
    const onClickCategory = (index) => {
        setActiveCategory(index);
    }

    const categories = [
        { title: "All" },
        { title: "Oranges" },
        { title: "Apples" },
    ]

    return (
        <StyledCategories>
            {categories.map((category, index) => (
                <StyledCategory
                    key={`category-${index}`}
                    onClick={() => onClickCategory(index)}
                    active={activeCategory === index ? true : false}
                    >{category.title}</StyledCategory>
            ))}
        </StyledCategories>
    )
}

export default Categories;