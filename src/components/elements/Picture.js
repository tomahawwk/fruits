import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.picture`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Picture = (props) => {
    return (
        <StyledPicture {...props}>
            <source srcset={props.phone} media="(max-width: 550px)" />
            <img src={props.desktop} alt={props.alt}/>
        </StyledPicture>
    )
}

export default Picture;