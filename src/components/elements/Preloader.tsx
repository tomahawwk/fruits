import {FC} from 'react'
import styled, {css} from 'styled-components'

interface Props {
    active?: boolean;
}

const StyledPreloader = styled.div<Props>`
    position: absolute;
    width: 100%;
    height: 100%;
    transition-duration: .4s;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    &:before {
        width: 60px;
        height: 60px;
        border: 2px solid ${props => props.theme.colors.grey2};
        border-top: 3px solid ${props => props.theme.colors.yellow};
        border-radius: 100%;
        position: absolute;
        top: 30vh;
        left: 0;
        right: 0;
        margin: auto;
        animation: spin 1s infinite ease;
        content: '';
        transition-duration: inherit;
        @media (max-width: ${props => props.theme.screen.tablet}){
            width: 40px;
            height: 40px;
            border: 2px solid rgba(0,0,0,.2);
            border-top: 3px solid ${props => props.theme.colors.yellow};
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    ${props => props.active && css`
        opacity: 1;
    `}
`

const Preloader: FC<Props> = ({ active }) => {
    return (
        <StyledPreloader active={active} />
    )
}

export default Preloader;