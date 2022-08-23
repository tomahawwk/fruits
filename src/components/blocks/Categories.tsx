import styled, {css} from 'styled-components'
import {FC, memo} from 'react'

import AnimatedWord from '../elements/AnimatedWord';

import { FadeYDown } from '../helpers/Animations'

type CategoriesProps = {
    value: number;
    onChangeCategory: (index: string) => void;
    customChangeEvent?: () => void;
}

interface CategoriesStyledProps {
    active?: boolean;
}

const StyledCategories = styled.ul`
    display: flex;
    grid-gap: 30px; 
    list-style: none;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        display: flex;
        flex-wrap: wrap;
        grid-gap: 4px 9px;
    }
`

const StyledCategory = styled.li<CategoriesStyledProps>`
    opacity: 0;
    animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        &:first-child {
            button {
                text-transform: initial;
            }
        }
        &:not(:last-child){
            &:after{
                content: ',';
                color: ${props => props.theme.colors.grey5};
            }
        }
    }
    button {
        font-weight: 500;
        border: none;
        background: none;
        transition-duration: ${props => props.theme.transition.duration};;
        color: ${props => props.theme.colors.grey5};
        &:hover {
            color: ${props => props.theme.colors.yellow};
            @media (max-width: ${props => props.theme.screen.tabletMin}){
                color: white;
            }
        }
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            font-size: 12px;
            text-transform: lowercase;
            font-weight: 400;
            color: ${props => props.theme.colors.grey5};
            & * {
                will-change: initial;
                grid-gap: 0;
                transition: none;
            }
        }
    }
    ${props => props.active && css`
        button{
            color: ${props => props.theme.colors.yellow};
            @media (max-width: ${props => props.theme.screen.tabletMin}){
                color: white;
            }
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

const Categories: FC<CategoriesProps> = memo(({ value, onChangeCategory, customChangeEvent }) => {
        const categories = [
            { title: "All" },
            { title: "Fruits" },
            { title: "Exotic_fruits" },
            { title: "Berries" },
        ]
        
        const changeHangler = (index: string) => {
            onChangeCategory(index)
            if(customChangeEvent){
                setTimeout(() => {
                    customChangeEvent();
                }, 400)
            }
        }

        return (
            <StyledCategories>
                {categories.map((category, index) => (
                    <StyledCategory
                        key={`category-${index}`}
                        active={value === index ? true : false}
                        >
                    <button onClick={() => changeHangler(String(index))}>
                        <AnimatedWord text={category.title} />
                    </button>
                    </StyledCategory>
                ))}
            </StyledCategories>
        )
    }
)

export default Categories;