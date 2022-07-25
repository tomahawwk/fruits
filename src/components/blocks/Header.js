import styled from 'styled-components'
import Flex from '../helpers/Flex';
import { fluidRange } from 'polished'

import Logo from '../elements/Logo';
import Nav from '../elements/Nav';

const StyledHeader = styled(Flex)`
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${Number(props.theme.unit.tablet) + Number(props.theme.navSize.tablet)}px`,
       toSize: `${Number(props.theme.unit.desktop) + Number(props.theme.navSize.desktop)}px`,
     },
     props.theme.screen.tablet,
     props.theme.screen.desktop,
    )}

    ${props => fluidRange({
       prop: 'padding-right',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    ${props => fluidRange({
       prop: 'height',
       fromSize: `${props.theme.headerSize.phone}px`,
       toSize: `${props.theme.headerSize.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}
    @media (max-width: ${props => props.theme.screen.tablet}){
        ${props => fluidRange({
            prop: 'padding-left',
            fromSize: `${props.theme.unit.phone}px`,
            toSize: `${props.theme.unit.desktop}px`,
            },
            props.theme.screen.phone,
            props.theme.screen.desktop,
        )}
    }
`

const Header = (props) => {
    return (
        <StyledHeader justify="space-between" align="center" gap="20px" width="100%">
            <Logo />
            <Nav />
        </StyledHeader>
    )
}

export default Header;
