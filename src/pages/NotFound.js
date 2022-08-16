import React from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import Flex from '../components/helpers/Flex';

import Section from '../components/blocks/Section';
import Page from '../components/blocks/Page';

import Title from '../components/elements/Title';

const StyledNotFound = styled(Page)`
    overflow: hidden;
`

const StyledNotFoundSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
    ${props => fluidRange({
       prop: 'margin-left',
       fromSize: `-${props.theme.navSize.tablet}px`,
       toSize: `-${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
`

const StyledNotFoundHead = styled(Flex)`
    flex-direction: column;
    align-items: center;
    position: relative;
    b{
        color: white;
        position: relative;
        font-weight: 600;
        ${props => fluidRange({
            prop: 'font-size',
            fromSize: `64px`,
            toSize: `150px`,
            },
            props.theme.screen.tablet,
            props.theme.screen.desktop,
        )}
    }
    span{
        position: absolute;
        top: -30px;
        color: ${props => props.theme.colors.yellow};
        font-family: ${props => props.theme.fonts.secondary};
        ${props => fluidRange({
            prop: 'font-size',
            fromSize: `24px`,
            toSize: `48px`,
            },
            props.theme.screen.tablet,
            props.theme.screen.desktop,
        )}
    }
    div{
        text-transform: initial;
        font-weight: 600;
        ${props => fluidRange({
            prop: 'font-size',
            fromSize: `18px`,
            toSize: `36px`,
            },
            props.theme.screen.tablet,
            props.theme.screen.desktop,
        )}
    }
`

const NotFound = () => {
    return (
        <StyledNotFound withoutFooter>
            <StyledNotFoundSection grain>
                <StyledNotFoundHead>
                    <span>Error</span>
                    <b>404</b>
                    <Title color={"white"}>oops!</Title>
                </StyledNotFoundHead>
            </StyledNotFoundSection>
        </StyledNotFound>
    )
}

export default NotFound;
