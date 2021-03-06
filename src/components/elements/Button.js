import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    will-change: transform;
    ;
    border: none;
    background: none;
    ${props => props.outlined && css`
        padding: 16px 35px 15px;
        font-size: 11px;
        white-space: nowrap;
        transition-duration: .4s;
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
    ${props => props.icon && css`
        width: ${props => props.width || "15px"};
        height: ${props => props.height || "15px"};
        svg{
            transition-duration: .4s;
            width: 100%;
            height: 100%;
            fill: ${props => props.theme.colors.light};
        }
    `}
`

const Button = (props) => {
    return <StyledButton {...props} />
}

export default Button;