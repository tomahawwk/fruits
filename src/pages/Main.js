import React, {useContext} from 'react';
import styled from 'styled-components';
import AppContext from '../context';

import CardGrid from '../components/blocks/CardGrid';
import Card from '../components/blocks/Card/index';
import Skeleton from '../components/blocks/Card/Skeleton';
import Section from '../components/blocks/Section';
import Categories from '../components/blocks/Categories';
import Page from '../components/blocks/Page';

import Content from '../components/elements/Content';

const StyledMain = styled(Page)`
    width: 100%;
`

const Main = (props) => {
    const { isLoading } = useContext(AppContext);

    return (
        <StyledMain>
            <Section hero grey>
                <Content>
                    <Categories />
                    <CardGrid>
                        {isLoading 
                            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                            : props.items.map(item => (<Card key={item.key} {...item} />))
                        }
                    </CardGrid>
                </Content>
            </Section>
        </StyledMain>
    )
}

export default Main;