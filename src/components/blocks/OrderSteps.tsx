import styled, {css} from 'styled-components'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

import { Content, Title, Text } from '../elements';
import Section from './Section';


type StyledStep = {
    one?: boolean;
    two?: boolean;
    three?: boolean;
    left?: boolean;
}

const StyledOrderSteps = styled(Section)`
    @media (max-width: ${props => props.theme.screen.desktopMin}){
        display: none;
    }
`

const StyledOrderStepsContent = styled(Content)`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
`

const StyledOrderStepsRow = styled.div`
    min-height: 200px;
    display: grid;
    grid-template-columns: 1fr 130px 1fr;
    &:nth-child(2){
        img {
            right: 0;
        }
    }
    &:last-child{
        & > div{
            border-bottom: none;
        }
    }
`

const StyledOrderStepsCell = styled.div`
    border-bottom: 1px solid rgba(255,255,255,.06);
    border-right: 1px solid rgba(255,255,255,.06);
    padding: 30px 70px;
    position: relative;
    &:first-child{
        display: flex;
        justify-content: flex-end;
    }
    &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    &:last-child{
        display: flex;
        justify-content: flex-start;
        border-right: none;
    }
    img {
        position: absolute;
        height: 110%;
    }
    .parallax-container {
        overflow: initial!important;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        div {
            height: 100%;
        }
    }
`

const StyledOrderStepsText = styled.div<StyledStep>`
    display: flex;
    flex-direction: column;
    max-width: 330px;
    grid-gap: 12px;
    ${props => props.left && css`
        text-align: right;
        align-items: flex-end;
    `}
`

const StyledOrderStep = styled.div<StyledStep>`
    border-radius: 100%;
    width: 70px;
    height: 70px;
    background: rgba(255,255,255,.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 6px;
    b {
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 1px;
        color: rgba(255,255,255,.4);
    }
    span {
        text-transform: uppercase;
        font-size: 11px;
    }
    position: relative;
    &:before , &:after {
        content: '';
        border: 3px solid rgba(255,255,255,.06);
        width: 121px;
        height: 121px;
        position: absolute;
        border-radius: 100%;
        transform: rotate(45deg);
    }
    
    ${props => props.one && css`
        &:after {
            border-left: 3px solid ${props => props.theme.colors.yellow};
        }
    `}

    ${props => props.two && css`
        &:after {
            border-left: 3px solid ${props => props.theme.colors.yellow};
            border-bottom: 3px solid ${props => props.theme.colors.yellow};
        }
    `}

    ${props => props.three && css`
        &:after {
            border: 3px solid ${props => props.theme.colors.yellow};
        }
    `}
`

const OrderSteps = () => {
    return (
        <StyledOrderSteps grain={true}>
            <StyledOrderStepsContent>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell>
                        <StyledOrderStepsText left={true}>
                            <Title underline={true}>Make a purchase</Title>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </Text>
                        </StyledOrderStepsText>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep one={true}>
                            <b>01</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell >
                        <MouseParallaxContainer useWindowMouseEvents={true} className="parallax-container">
                            <MouseParallaxChild
                                factorX={0.01}
                                factorY={0.01}>
                                <img src="./images/order-steps/order-step-1.png" />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </StyledOrderStepsCell>
                </StyledOrderStepsRow>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell>
                        <MouseParallaxContainer useWindowMouseEvents={true} className="parallax-container">
                            <MouseParallaxChild
                                factorX={-0.01}
                                factorY={-0.01}>
                                <img src="./images/order-steps/order-step-2.png" />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep two={true}>
                            <b>02</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStepsText>
                            <Title underline={true}>We will contact you</Title>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </Text>
                        </StyledOrderStepsText>
                    </StyledOrderStepsCell>
                </StyledOrderStepsRow>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell>
                        <StyledOrderStepsText left={true}>
                            <Title underline={true}>We send the goods</Title>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </Text>
                        </StyledOrderStepsText>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep three={true}>
                            <b>03</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <MouseParallaxContainer useWindowMouseEvents={true} className="parallax-container">
                            <MouseParallaxChild
                                factorX={-0.01}
                                factorY={0.01}>
                                <img src="./images/order-steps/order-step-3.png" />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </StyledOrderStepsCell>
                </StyledOrderStepsRow>
            </StyledOrderStepsContent>
        </StyledOrderSteps>
        
    )
}

export default OrderSteps;