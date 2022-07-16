import React, {useContext} from 'react';
import styled from 'styled-components';
import AppContext from '../context';

import CardGrid from '../components/blocks/CardGrid';
import Card from '../components/blocks/Card/index';
import Skeleton from '../components/blocks/Card/Skeleton';
import Section from '../components/blocks/Section';
import Categories from '../components/blocks/Categories';
import Sort from '../components/blocks/Sort';
import Page from '../components/blocks/Page';

import Content from '../components/elements/Content';

import Flex from '../components/helpers/Flex';

const StyledMain = styled(Page)`
    width: 100%;
`

const Main = (props) => {
    const { isLoading, categoryId, setCategoryId, sortType, setSortType } = useContext(AppContext);

    return (
        <StyledMain>
            <Section hero grey>
                <Content>
                    <Flex justify="space-between">
                        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
                        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
                    </Flex>
                    <CardGrid> { props.items.map((item, index) => (<Card key={item.key} index={index} {...item} />)) } </CardGrid>
                </Content>
            </Section>
        </StyledMain>
    )
}

export default Main;