import styled from 'styled-components'
import Flex from '../helpers/Flex';

import Link from '../elements/Link';
import { InstagramIcon, TwitterIcon, FacebookIcon } from '../elements/Icons';

const StyledSocials = styled(Flex)`
    a{
        height: 16px;
        height: 16px;
        &:hover{
            svg{
                opacity: 1;
            }
        }
    }
    svg{
        width: 100%;
        height: 100%;
        opacity: .5;
        transition-duration: .4s;
        fill: ${props => props.theme.colors.light};
    }
`

const Socials = (props) => {
    return (
        <StyledSocials gap="40px" direction="column">
            <Link to="/">
                <InstagramIcon />
            </Link>
            <Link to="/">
                <TwitterIcon />
            </Link>
            <Link to="/">
                <FacebookIcon />
            </Link>
        </StyledSocials>
    )
}

export default Socials;