import styled, {css} from 'styled-components'

const StyledText = styled.p`
    font-size: ${props => props.size || '11px'};
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    line-height: 1.7;
    display: inline-block;
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

    ${props => props.yellowLabel && css`
        color: ${props.theme.colors.yellow};
        font-family: ${props.theme.fonts.secondary};
    `}
`

const Text = (props) => {
    return (
        <StyledText {...props} />
    )
}

export default Text;