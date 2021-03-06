import React from 'react';
import styled from 'styled-components';

import Page from '../components/blocks/Page';
import Hero from '../components/blocks/Hero';

const StyledMain = styled(Page)`
    width: 100%;
`

const Main = (props) => {

    return (
        <StyledMain>
            <Hero></Hero>
        </StyledMain>
    )
}

export default Main;