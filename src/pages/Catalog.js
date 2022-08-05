import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage, setFilters, setCategoryId } from '../redux/slices/filterSlice';
import { fetchFruits, setLoading, } from '../redux/slices/fruitsSlice';
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
import { sortOptions } from '../components/blocks/Sort';

import Content from '../components/elements/Content';
import SectionHead from '../components/elements/SectionHead';

const StyledCatalog = styled(Page)`
  position: relative;
  .anchor {
    position: absolute;
    top: 40vh;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
      top: 0;
    }
  }
`

const StyledCatalogHead = styled.div`

`

const Catalog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const anchor = useRef();
    const {categoryId, currentPage} = useSelector(state => state.filter);
    const {items, status} = useSelector(state => state.fruits);
    const {appearAnimate,} = useSelector(state => state.animation);
    const [localItems, setLocalItems] = useState([]);
    const [canFetch, setCanFetch] = useState(false);
    const sort = useSelector(state => state.filter.sort);
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
      anchor.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    const getFruits = () => {
      console.log("getFruits")
        dispatch(setLoading(true))
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const order = sort.value.includes('-') ? 'asc' : 'desc';
        const sortValue = sort.value.replace('-', '');
        
        const getData = () => {
          dispatch(fetchFruits({ category, search, order, sortValue, currentPage }));
        }
      
        setTimeout(() => {
          getData();
        }, 600)
    }
    
    useEffect(() => {
        if(window.location.search){
          const params = qs.parse(window.location.search.substring(1))
          const sort = sortOptions.find(obj => obj.value === params.sortProperty)
          dispatch(
            setFilters({
              ...params,
              sort
            })
          )
        }
    }, [])
    
    useEffect(() => {
      if(appearAnimate){
        getFruits();
        setCanFetch(true);
      }
    }, [appearAnimate])

    useEffect(() => {
      if(!isSearch.current && canFetch) {
        getFruits();
      }
      isSearch.current = false;
    }, [categoryId, sort.value, searchValue, currentPage]);
    
    useEffect(() => {
        if(status === "filled"){
          setLocalItems(items.map((item, index) => 
            Object.assign({}, item, {index})
          ));
          setTimeout(() => {
            dispatch(setLoading(false))
          }, 600)
        }
        else{
          dispatch(setLoading(true))
        }
    }, [status]);
    
    useEffect(() => {
        if(isMounted.current){
          const queryString = qs.stringify({
            sortProperty: sort.value,
            categoryId,
            currentPage
          });
          navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [categoryId, sort.value, searchValue, currentPage])

    window.onload = function () {
      getFruits();
      setCanFetch(true)
    }

    const catalogItems = localItems.map((item) => (<Card key={item.key} {...item} />));

    return (
        <StyledCatalog mobileHeadImage="">
            <PageHead
                title="Catalog"
                subtitle="our goods"
                back={{ name: "Home", url: "/" }}
                next={{ name: "Articles", url: "/articles" }}
            />
            <Section grey>
                <Content >
                    <div className="anchor" ref={anchor} />
                    <StyledCatalogHead>
                      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
                      <SectionHead desktop="true">
                          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                          <Sort value={sort.value} />
                      </SectionHead>
                    </StyledCatalogHead>
                    <CardGrid> { catalogItems } </CardGrid>
                    <Flex justify="space-between">
                        <Pagination onChangePage={(number) => onChangePage(number)}/>
                    </Flex>
                </Content>
            </Section>
        </StyledCatalog>
    )
}

export default Catalog;