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
    `}

    ${props => props.grey && css`
        background-color: ${props => props.theme.colors.grey4};
    `}
    ${props => props.grain && css`
        background-color: ${props => props.theme.colors.grey3};
        &:before {
            animation: ${Grain} 8s steps(10) infinite;
            background-image: url('images/noise.png');
            content: "";
            height: 300%;
            left: -50%;
            opacity: .4;
            position: fixed;
            top: -100%;
            width: 300%;
            z-index: 1;
            pointer-events: none;
        }
    `}
`

const Section = (props) => {
    return (
        <StyledSection {...props} />
    )
}

export default Section;
