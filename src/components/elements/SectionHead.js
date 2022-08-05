import styled, {css} from 'styled-components'

const StyledSectionHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 25px;
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: ${props => props.theme.colors.grey2};
    }
    ${props => props.desktop && css`
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    `}
`

const SectionHead = (props) => {
    return (
        <StyledSectionHead {...props} />
    )
}

export default SectionHead;