import {FC} from 'react'
import styled from 'styled-components'

type Props = {
    phone: string;
    alt: string;
    desktop: string;
}

const StyledPicture = styled.picture`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
            object-fit: contain;
        }
    }
`

const Picture: FC<Props> = ({ phone, alt, desktop}) => {
    return (
        <StyledPicture>
            <source srcSet={phone} media="(max-width: 600px)" />
            <img src={desktop} alt={alt}/>
        </StyledPicture>
    )
}

export default Picture;