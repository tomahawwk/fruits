import styled, {css} from 'styled-components'
import React from 'react'
import AnimatedWord from '../elements/AnimatedWord';
const StyledCategories = styled.ul`
    display: flex;
    grid-gap: 30px; 
    list-style: none;
`

const StyledCategory = styled.li`
    button {
        font-weight: 500;
        border: none;
        background: none;
        transition-duration: ${props => props.theme.transition.duration};;
        color: ${props => props.theme.colors.grey5};
        &:hover {
            color: ${props => props.theme.colors.yellow};
        }
    }
    ${props => props.active && css`
        button{
            color: ${props => props.theme.colors.yellow};
        }
    `}
`

const Categories = ({ value, onChangeCategory }) => {
    const categories = [
        { title: "All" },
        { title: "Fruits" },
        { title: "Exotic_fruits" },
        { title: "Berries" },
    ]

    return (
        <StyledCategories>
            {categories.map((category, index) => (
                <StyledCategory
                    key={`category-${index}`}
                    
                    active={value === index ? true : false}
                    >
                <button onClick={() => onChangeCategory(index)}>
                    <AnimatedWord text={category.title} />
                </button>
                </StyledCategory>
            ))}
        </StyledCategories>
    )
}

export default Categories;