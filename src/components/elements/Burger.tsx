import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledBurger = styled.button`
    background-color: ${props => props.theme.colors.grey2};
    ;
    border: none;
    position: relative;
    ${props => fluidRange({
       prop: 'width',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
    ${props => fluidRange({
       prop: 'height',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
    transition-duration: .6s;
    transition-timing-function: ease;
    &:before, &:after, span{
        width: 30px;
        height: 2px;
        background-color: ${props => props.theme.colors.light}; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        content: '';
        bottom: 0;
        margin: auto;
        will-change: transform;
        transform-origin: left;
        transition-duration: inherit;
        transition-timing-function: inherit;
    }
    &:before{
        transform: translateY(-9px);
    }
    span{
        transform: scaleX(.6);
    }
    &:after{
        transform: translateY(9px) scaleX(.3);
    }
    &:hover{
        &:before{
            transform: translateY(-7px) scaleX(.8) translateX(3px);
        }
        span{
            transform: scaleX(.8) translateX(3px);
        }
        &:after{
            transform: translateY(7px) scaleX(.8) translateX(3px);
        }
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        background: none;
        width: 36px;
        height: 36px;
        &:before, &:after, span{
            transform-origin: right;
            height: px;
        }
        &:before{
            transform: translateY(-6px) scaleX(.5);
        }
        span{
            transform: scaleX(.6);
        }
        &:after{
            transform: translateY(6px) scaleX(.3);
        }
    }
`

const Burger = (props) => {
    return (
        <StyledBurger {...props} onClick={props.click}>
            <span></span>
        </StyledBurger>
    )
}

export default Burger;