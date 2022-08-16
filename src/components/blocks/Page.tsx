import styled from 'styled-components'
import { fluidRange } from 'polished'
import Footer from './Footer';

const StyledPage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow-y: auto;
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar{
        width: 3px;
        height: 20px;
    }
        
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.grey5};
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        padding-left: 0;
        &::-webkit-scrollbar{
            width: 2px;
        }
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        background: ${props => props.theme.colors.grey2};
    }
`

const StyledPageInner = styled.div`
`

const Page = (props) => {
    return (
        <StyledPage>
            <StyledPageInner {...props}></StyledPageInner>
            {!props.withoutFooter && <Footer /> }
        </StyledPage>
    )
}

export default Page;
