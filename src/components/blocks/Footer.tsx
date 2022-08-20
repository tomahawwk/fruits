import styled, { css } from 'styled-components';
import { FC } from 'react';
import { fluidRange } from 'polished';

import Content from '../elements/Content';
import Logo from '../elements/Logo';

import Nav from '../elements/Nav';
import Text from '../elements/Text';
import Title from '../elements/Title';

import Flex from '../helpers/Flex';
import Banner from '../elements/Banner';

const StyledFooter = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 25fr 75fr;
  ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
  )}
  @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
    grid-template-columns: initial;
  }
`;

const StyledFooterPart = styled(Content)`
  background: ${(props) => props.theme.colors.black};
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  ${(props) =>
    props.grey &&
    css`
      background-color: ${(props) => props.theme.colors.grey4};
    `}

  ${(props) =>
    props.bottom &&
    css`
      align-items: center;
      display: flex;
      @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        p {
          text-align: center;
          width: 100%;
          font-size: 12px;
          text-align: center;
        }
      }
    `}

    ${(props) =>
    props.desktop &&
    css`
      @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        display: none;
      }
    `}

    .contacts {
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
`;

const StyledFooterContact = styled(Flex)`
  @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
    grid-gap: 7px;
  }
  span,
  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    width: fit-content;
    font-size: 14px;
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
      font-size: 12px;
    }
  }

  a {
    transition-duration: ${(props) => props.theme.transition.duration};
    &:hover {
      color: white;
    }
  }
  div {
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
      font-size: 12px;
    }
  }
`;

const StyledFooterContacts = styled.div`
  flex-direction: column;
  height: 100%;
  display: flex;
  grid-gap: 25px;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
    display: grid;
    grid-gap: 20px 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledFooterPart>
        <StyledFooterContacts>
          <StyledFooterContact direction="column" gap="12px">
            <Title size="14px">Github</Title>
            <a href="https://github.com/tomahawwk/" target="_blank">@tomahawwk</a>
          </StyledFooterContact>
          <StyledFooterContact direction="column" gap="12px">
            <Title size="14px">LinkedIn</Title>
            <a href="https://t.me/tom_ahawk" target="_blank">@tom_ahawk</a>
          </StyledFooterContact>
          <StyledFooterContact direction="column" gap="12px">
            <Title size="14px">Telegram</Title>
            <a href="https://t.me/tom_ahawk" target="_blank">@tom_ahawk</a>
          </StyledFooterContact>
          <StyledFooterContact direction="column" gap="12px">
            <Title size="14px">Location</Title>
            <span>St. Petersburg, Russia</span>
          </StyledFooterContact>
        </StyledFooterContacts>
      </StyledFooterPart>
      <Banner url="/" image="images/banner.jpg" />

      <StyledFooterPart grey={true} desktop={true}>
        <Logo row={+true} />
      </StyledFooterPart>
      <StyledFooterPart bottom={true}>
        <Flex width="100%" justify="space-between" align="center">
          <Nav footer />
          <Text size="16px">@ 2022 React fruits. All rights reserved.</Text>
        </Flex>
      </StyledFooterPart>
    </StyledFooter>
  );
};

export default Footer;
