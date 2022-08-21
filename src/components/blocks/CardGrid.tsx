import styled, {css} from 'styled-components'

interface Props {
    autoHeight?: boolean;
}

export default styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    width: 100%;
    min-height: 43vh;
    @media (max-width: ${props => props.theme.screen.desktopMd}){
        grid-template-columns: repeat(4, 1fr);
        min-height: 53vh;
    }
    @media (max-width: ${props => props.theme.screen.desktop}){
        grid-template-columns: repeat(3, 1fr);
        min-height: 57vh;
        grid-gap: 25px;
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-template-columns: initial;
        grid-gap: 12px;
        min-height: 90vh;
    }
    ${props => props.autoHeight && css`
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            min-height: auto;
        }
    `}
`;