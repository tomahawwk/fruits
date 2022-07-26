import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setLoading } from '../redux/slices/filterSlice';

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

const Catalog = (props) => {
    const dispatch = useDispatch();

    const categoryId = useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sort.value);
    const [catalogItems, setCatalogItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    useEffect(() => {
        dispatch(setLoading(true))
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const sort = sortType.replace('-', '');
        async function fetchData() {
          try{
            const [catalogItemsResponse] = await Promise.all([
              axios.get(`https://62bcc3246b1401736c008049.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sort}&order=${order}${search}`)
            ]);
            catalogItemsResponse.data.forEach((item, index) => {
                item.index = index;
            })
            setCatalogItems(catalogItemsResponse.data);

            
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 100)
            
          }
          catch(error){ 
            console.log("Ошибка при запросе фруктиков")
          }
        }
        setTimeout(() => {
            fetchData();
        }, 600)
    }, [categoryId, sortType, searchValue, currentPage]);

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
                    <Search value={searchValue} setValue={setSearchValue} />
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