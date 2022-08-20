import styled, {css} from 'styled-components'
import { Content } from '../elements';
import Section from './Section';

type StyledStep = {
    one?: boolean;
    two?: boolean;
    three?: boolean;
}

const StyledOrderSteps = styled(Content)`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
`

const StyledOrderStepsRow = styled.div`
    min-height: 200px;
    display: grid;
    grid-template-columns: auto 130px auto;
    &:last-child{
        div{
            border-bottom: none;
        }
    }
`

const StyledOrderStepsCell = styled.div`
    border-bottom: 1px solid rgba(255,255,255,.06);
    border-right: 1px solid rgba(255,255,255,.06);
    padding: 30px;
    position: relative;
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
    }
`

const StyledOrderStepsText = styled.div`
    display: flex;
    flex-direction: column;
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
        <Section grain={true}>
            <StyledOrderSteps>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell></StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep one={true}>
                            <b>01</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <img src="@images/order-steps/order-step-1.png" />
                    </StyledOrderStepsCell>
                </StyledOrderStepsRow>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell></StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep two={true}>
                            <b>02</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell></StyledOrderStepsCell>
                </StyledOrderStepsRow>
                <StyledOrderStepsRow>
                    <StyledOrderStepsCell></StyledOrderStepsCell>
                    <StyledOrderStepsCell>
                        <StyledOrderStep three={true}>
                            <b>03</b>
                            <span>Step</span>
                        </StyledOrderStep>
                    </StyledOrderStepsCell>
                    <StyledOrderStepsCell></StyledOrderStepsCell>
                </StyledOrderStepsRow>
            </StyledOrderSteps>
        </Section>
        
    )
}

export default OrderSteps;