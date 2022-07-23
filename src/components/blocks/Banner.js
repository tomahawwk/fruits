import styled from 'styled-components'
import Link from '../elements/Link'
import Title from '../elements/Title'
import Text from '../elements/Text'

const StyledBanner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    height: 35vh;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    &:before{
        content: '';
        background: linear-gradient(to left, rgba(0,0,0,.4), transparent);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const StyledBannerImage = styled.img`
    object-fit: cover;
    z-index: -1;
    top: -10%;
    width: 100%;
    height: 120%;
    left: 0;
    position: absolute;
`

const StyledBannerContent = styled.div`
    position: relative;
    z-index: 1;
    width: 40%;
    height: 100%;
    line-height: 240%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const StyledBannerLink = styled(Link)`
    color: white;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    grid-gap: 20px;
    font-size: 12px;
    align-items: center;
    transition-duration: .4s;
    width: fit-content;
    &:hover {
        span{
            background-color: ${props => props.theme.colors.yellow};
            border: 1px solid ${props => props.theme.colors.yellow};
            &:after, &:before {
                background-color: black;
            }
            &:after{
                transform: scaleY(1.8);
            }
            &:before{
                transform: scaleX(1.8);
            }
        }
    }
    span{
        position: relative;
        width: 45px;
        height: 35px;
        border: 1px solid white;
        transition-duration: inherit;
        &:before, &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background: white;
            width: 9px;
            height: 1px;
            transition-duration: inherit;
        }
        &:after{
            width: 1px;
            height: 9px;
        }
    }
`

const Banner = (props) => {
    return (
        <StyledBanner to={ props.url }>
            <StyledBannerImage src={ props.image } />
            <StyledBannerContent>
                <Title t2>First purchase<br></br> bonus <Text yellowLabel size="56px">Premium</Text></Title>
                
                <StyledBannerLink to="/">
                    <span></span>
                    <div>Get bonus</div>
                </StyledBannerLink>
            </StyledBannerContent>
        </StyledBanner>
    )
}

export default Banner;