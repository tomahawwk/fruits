import styled from 'styled-components'
import { fluidRange } from 'polished'


const StyledPage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    outline: 1px solid red;
    overflow-y: auto;
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${props.theme.navSize.tablet}px`,
       toSize: `${props.theme.navSize.desktop}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}
`

const Page = (props) => {
    return (
        <StyledPage {...props} />
    )
}

export default Page;
