import styled, {css} from 'styled-components'
import {FC, memo} from 'react'

import AnimatedWord from '../elements/AnimatedWord';

import { FadeYDown } from '../helpers/Animations'

type CategoriesProps = {
    value: number;
    onChangeCategory: (index: string) => void;
}

interface CategoriesStyledProps {
    active?: boolean;
}

const StyledCategories = styled.ul`
    display: flex;
    grid-gap: 30px; 
    list-style: none;
`

const StyledCategory = styled.li<CategoriesStyledProps>`
    opacity: 0;
    animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
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
    &:nth-child(1){
        animation-delay: .1s;
    }
    &:nth-child(2){
        animation-delay: .2s;
    }
    &:nth-child(3){
        animation-delay: .3s;
    }
    &:nth-child(4){
        animation-delay: .4s;
    }
`

const Categories: FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
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
                    <button onClick={() => onChangeCategory(String(index))}>
                        <AnimatedWord text={category.title} />
                    </button>
                    </StyledCategory>
                ))}
            </StyledCategories>
        )
    }
)

export default Categories;