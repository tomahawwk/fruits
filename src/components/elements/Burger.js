import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledBurger = styled.button`
    background-color: ${props => props.theme.colors.grey2};
    cursor: pointer;
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
        transition-duration: .4s;
        transform-origin: left;
        transition-timing-function: cubic-bezier(.165,.84,.44,1);
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
            transform: translateY(-7px);
        }
        span{
            transform: scaleX(1) translateX(0px);
        }
        &:after{
            transform: translateY(7px) scaleX(1) translateX(0);
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