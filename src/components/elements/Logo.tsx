import {FC} from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { FadeY } from '../helpers/Animations';

interface Props {
    row?: number;
}  

const StyledLogo = styled(Link)<Props>`
    text-decoration: none;
    color: ${props => props.theme.colors.light};
    display: flex;
    animation: ${FadeY} 1s ${props => props.theme.transition.function} forwards;
    flex-direction: column;
    b {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 600;
        font-size: 28px;
    }
    p{
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 32px;
        color: ${props => props.theme.colors.yellow};
    }

    ${props => props.row && css`
        flex-direction: row;
        grid-gap: 20px;
        p{
            color: white;
        }
    `}

    @media (max-width: ${props => props.theme.screen.tablet}){
        flex-direction: row;
        grid-gap: 10px;
        align-items: center;
        b, p {
            font-size: 22px;
        }
        p {
            margin-top: 4px;
        }
    }
`

const Logo:FC<Props> = ({row}) => {
    return (
        <StyledLogo row={row} to="/">
            <b>React</b>
            <p>Fruits</p>
        </StyledLogo>
    )
}

export default Logo;