import styled, {css} from 'styled-components'
import { fluidRange } from 'polished'

import { Grain } from '../helpers/Animations';

const StyledSection = styled.section`
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    ${props => props.hero && css` 
        ${props => fluidRange({
            prop: 'padding-top',
            fromSize: `${Number(props.theme.headerSize.tablet) + 80}px`,
            toSize: `${Number(props.theme.headerSize.desktop) + 80}px`,
            },
            props.theme.screen.tablet,
            props.theme.screen.desktop,
        )}
        min-height: 100vh;
    `}
            
    ${props => props.grey && css`
        background-color: ${props => props.theme.colors.grey4};
    `}
            
    ${props => props.grain && css`
        background-color: ${props => props.theme.colors.grey3};
        &:after {
            content: "";
            width: 100%;
            height: 100%;
            background-image: radial-gradient(transparent, rgba(255,255,255,.1) transparent);
            object-fit: cover;
            opacity: .08;
            background-size: 100%;
            background-repeat: no-repeat;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
        }

        &:before {
            animation: ${Grain} 8s steps(10) infinite;
            background-image: url('images/noise.png');
            content: "";
            height: 300%;
            left: -50%;
            opacity: .4;
            position: absolute;
            top: -100%;
            width: 300%;
            z-index: 1;
            pointer-events: none;
        }
    `}
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        background: none;
        padding: ${props => props.theme.unit.phone}px 0;
    }
`

const Section = (props) => {
    return (
        <StyledSection {...props} />
    )
}

export default Section;
