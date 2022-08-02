import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    will-change: transform;
    border: none;
    background: none;
    ${props => props.outlined && css`
        padding: 16px 35px 15px;
        font-size: 11px;
        white-space: nowrap;
        transition-duration: ${props => props.theme.transition.duration};
        align-self: ${props => props.align || "stretch"};
        color: ${props.theme.colors.light};
        text-transform: uppercase;
        background-color: transparent;
        font-weight: 400;
        border: 1px solid ${props => props.theme.colors.grey5};
        &:hover{
            color: ${props => props.theme.colors.black};
            font-weight: 600;
            background-color: ${props => props.theme.colors.yellow};
            border: 1px solid ${props => props.theme.colors.yellow};
        }
        @media (max-width: ${props => props.theme.screen.tablet}){
            font-size: 9px;
        }
    `}
    ${props => props.close && css`
        width: ${props => props.width || "16px"};
        height: ${props => props.height || "16px"};
        position: relative;
        background: none;
        border: none;
        display: block;
        padding: 0;
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.function};
        &:before, &:after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition-timing-function: inherit;
            transition-duration: inherit;
            margin: auto;
            background-color: ${props => props.theme.colors.grey7};
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
        &:hover {
            transform: scale(1.2);
            &:before, &:after {
                background-color: white;
            }
        }
        &:active {
            transform: scale(.9);
        }
    `}
`

const Button = (props) => {
    return <StyledButton {...props} />
}

export default Button;