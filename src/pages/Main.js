import React, {useContext} from 'react';
import styled from 'styled-components';
import AppContext from '../context';

import Page from '../components/blocks/Page';

const StyledMain = styled(Page)`
    width: 100%;
`

const Main = (props) => {

    return (
        <StyledMain>
            Main
        </StyledMain>
    )
}

export default Main;