import styled, {css} from 'styled-components'

const StyledText = styled.p`
    font-size: 11px;
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    line-height: 1.7;
    ${props => props.clamp && css`
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: ${props.clamp};
    `}
    ${props => props.uppercase && css`
        text-transform: uppercase;
        font-size: 9px;
        font-weight: 600;
    `}
`

const Text = (props) => {
    return (
        <StyledText {...props} />
    )
}

export default Text;