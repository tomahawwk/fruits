
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Flex from '../components/helpers/Flex';

import Page from '../components/blocks/Page';
import Search from '../components/blocks/Search';
import CardGrid from '../components/blocks/CardGrid';
import Card from '../components/blocks/Card';
import Section from '../components/blocks/Section';
import Categories from '../components/blocks/Categories';
import Sort from '../components/blocks/Sort';
import PageHead from '../components/blocks/PageHead';
import Pagination from '../components/blocks/Pagination';

import Content from '../components/elements/Content';

const StyledCatalog = styled(Page)``

const StyledCatalogFilters = styled(Flex)`
    @media (max-width: ${props => props.theme.screen.tablet}){
        display: none
    }
`

const Catalog = ({ catalogItems, setCurrentPage, searchValue, setSearchValue, sortType, categoryId }) => {
    const dispatch = useDispatch();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    const items = catalogItems.map((item) => (<Card key={item.key} {...item} />));

    return (
        <StyledCatalog mobileHeadImage="">
            <PageHead
                title="Catalog"
                back={{ name: "Home", url: "/" }}
                next={{ name: "Articles", url: "/articles" }}
            />
            <Section grey>
                <Content>
                    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                    <StyledCatalogFilters justify="space-between">
                        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                        <Sort value={sortType} />
                    </StyledCatalogFilters>
                    <CardGrid> { items } </CardGrid>
                    <Flex justify="space-between">
                        <Pagination onChangePage={(number) => setCurrentPage(number)}/>
                    </Flex>
                </Content>
            </Section>
        </StyledCatalog>
    )
}

export default Catalog;