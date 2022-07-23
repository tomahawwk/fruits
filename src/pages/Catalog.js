import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Flex from '../components/helpers/Flex';

import Page from '../components/blocks/Page';
import Search from '../components/blocks/Search';
import CardGrid from '../components/blocks/CardGrid';
import Card from '../components/blocks/Card/index';
import Section from '../components/blocks/Section';
import Categories from '../components/blocks/Categories';
import Sort from '../components/blocks/Sort';
import PageHead from '../components/blocks/PageHead';
import Pagination from '../components/blocks/Pagination';

import Content from '../components/elements/Content';

const StyledCatalog = styled(Page)`
    
`

const Catalog = (props) => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const dispatch = useDispatch();
    console.log(`redux state ${categoryId}`)

    const [catalogItems, setCatalogItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState({ value: 'rating', label: 'rating '});
    const [searchValue, setSearchValue] = useState('');

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const order = sortType.value.includes('-') ? 'asc' : 'desc';
        const sort = sortType.value.replace('-', '');
        async function fetchData() {
          try{
            const [catalogItemsResponse] = await Promise.all([
              axios.get(`https://62bcc3246b1401736c008049.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sort}&order=${order}${search}`)
            ]);
            setCatalogItems(catalogItemsResponse.data);
            setIsLoading(false);
          }
          catch(error){ 
            console.log("Ошибка при запросе фруктиков")
          }
        }
    
        fetchData();
    }, [categoryId, sortType, searchValue, currentPage]);

    const items = catalogItems.map((item, index) => (<Card key={item.key} index={index} {...item} />));

    return (
        <StyledCatalog>
            <PageHead
                title="Catalog"
                back={{ name: "Home", url: "/" }}
                next={{ name: "Articles", url: "/articles" }}
            />
            <Section grey>
                <Content>
                    <Search value={searchValue} setValue={setSearchValue} />
                    <Flex justify="space-between">
                        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
                    </Flex>
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