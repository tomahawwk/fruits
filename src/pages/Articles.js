import React, {useContext} from 'react';
import styled from 'styled-components';

import Page from '../components/blocks/Page';
import PageHead from '../components/blocks/PageHead';
import Section from '../components/blocks/Section';

const StyledArticles = styled(Page)`
    
`

const Articles = (props) => {

    return (
        <StyledArticles>
            <PageHead
                title="Articles"
                back={{ name: "Catalog", url: "/catalog" }}
                next={{ name: "Home", url: "/" }}
            />
            <Section grey>
                Articles
            </Section>
        </StyledArticles>
    )
}

export default Articles;