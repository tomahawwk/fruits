import styled, { css } from 'styled-components'
import Content from '../elements/Content'
import Logo from '../elements/Logo'

import Nav from '../elements/Nav'
import Text from '../elements/Text'
import Title from '../elements/Title'

import Flex from '../helpers/Flex'
import Banner from '../blocks/Banner'

const StyledFooter = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 25fr 75fr;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-template-columns: initial;
    }
`

const StyledFooterPart = styled(Content)`
    background: ${props => props.theme.colors.black};
    padding-top: 40px;
    padding-bottom: 40px;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        padding-top: 25px;
        padding-bottom: 25px;
    }

    ${props => props.grey && css`
        background-color: ${props => props.theme.colors.grey4};
    `}

    ${props => props.bottom && css`
        align-items: center;
        display: flex;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            p {
                text-align: center;
                width: 100%;
                font-size: 12px;
                text-align: center;
            }
        }
    `}

    ${props => props.desktop && css`
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    `}
`

const StyledFooterContact = styled(Flex)`
    span, a{
        color: rgba(255,255,255,.4);
        text-decoration: none;
        width: fit-content;
        font-size: 14px;
    }

    a{
        transition-duration: .4s;
        &:hover{
            color: white;
        }
    }
`

const Footer = (props) => {
    return (
        <StyledFooter>
            <StyledFooterPart>
                <Flex direction="column" gap="25px" height="100%" justify="space-between">
                    <StyledFooterContact direction="column" gap="15px">
                        <Title size="14px">Github</Title>
                        <a href="https://github.com/tomahawwk/">@tomahawwk</a>
                    </StyledFooterContact>
                    <StyledFooterContact direction="column" gap="15px">
                        <Title size="14px">Telegram</Title>
                        <a href="https://t.me/tom_ahawk">@tom_ahawk</a>
                    </StyledFooterContact>
                    <StyledFooterContact direction="column" gap="15px">
                        <Title size="14px">Location</Title>
                        <span>St. Petersburg, Russia</span>
                    </StyledFooterContact>
                </Flex>
            </StyledFooterPart>
            <Banner url="/" image="images/banner.jpg"/>

            <StyledFooterPart grey desktop>
                <Logo row="true" />
            </StyledFooterPart>
            <StyledFooterPart bottom>
                <Flex width="100%" justify="space-between" align="center">
                    <Nav footer/>
                    <Text size="16px">@ 2022 React fruits. All rights reserved.</Text>
                </Flex>
            </StyledFooterPart>
        </StyledFooter>
    )
}

export default Footer;
