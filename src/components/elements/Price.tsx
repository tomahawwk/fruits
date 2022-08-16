import styled, {css} from 'styled-components'

interface Props {
    old?: boolean;
}

export default styled.p<Props>`
    font-size: 24px;
    color: ${props => props.theme.colors.light};
    font-weight: 500;
    white-space: nowrap;
    ${props => props.old && css`
        text-decoration: line-through;
        font-size: 18px;
        line-height: 1;
        margin-bottom: 3px;
        color: ${props => props.theme.colors.text};
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            font-size: 14px!important;
        }
    `}
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        font-size: 20px;
    }
`