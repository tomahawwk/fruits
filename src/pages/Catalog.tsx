import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage, setFilters, setCategoryId, getFilterSelector, FilterState } from '../redux/slices/filterSlice';
import { fetchFruits, setLoading, getFruitsSelector, SearchParams, Fruit } from '../redux/slices/fruitsSlice';
import { getAnimationSelector } from '../redux/slices/animationSlice';
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
import Preloader from '../components/elements/Preloader';
import Error from '../components/elements/Error';
import SectionHead from '../components/elements/SectionHead';
import { useAppDispatch } from '../redux/store';

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

const StyledCatalogHead = styled.div``

const Catalog = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const anchor = useRef<HTMLDivElement>(null);
    const {categoryId, currentPage} = useSelector(getFilterSelector);
    const {items, status, isLoading} = useSelector(getFruitsSelector);
    const {appearAnimate} = useSelector(getAnimationSelector);
    const [localItems, setLocalItems] = useState<Fruit[]>([]);
    const [canFetch, setCanFetch] = useState(false);
    const {sort} = useSelector(getFilterSelector);
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    }

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
      anchor.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    const getFruits = () => {
      console.log("getFruits")
        dispatch(setLoading(true))
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        const order = sort.value.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.value.replace('-', '');
        
        const getData = () => {
          dispatch(
            fetchFruits({ 
              category,
              search,
              order,
              sortBy,
              currentPage
            })
          );
        }
      
        setTimeout(() => {
          getData();
        }, 600)
    }
    
    useEffect(() => {
        if(window.location.search){
          const params = qs.parse(window.location.search.substring(1)) as unknown as SearchParams;
          const sort = sortOptions.find(obj => obj.value === params.sortBy)
 
          dispatch(setFilters({
            searchValue: params.search,
            categoryId: Number(params.category),
            currentPage: Number(params.currentPage),
            sort: sort || sortOptions[0]
          }))
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

    const catalogItems = localItems.map((item: Fruit) => (<Card key={item.index} {...item} />));

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
                      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                      <SectionHead desktop={true}>
                          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                          <Sort value={sort.value} />
                      </SectionHead>
                    </StyledCatalogHead>
                    { status === "failure" ?
                      <Error>Fruit getting error :(</Error>
                      :
                      <>
                        <Preloader active={isLoading} />
                        <CardGrid autoHeight={!isLoading}> { catalogItems } </CardGrid>
                        { categoryId === 0 &&
                          <Flex justify="space-between">
                            <Pagination onChangePage={(number) => onChangePage(number)}/>
                          </Flex> }
                      </>
                    }
                    
                </Content>
            </Section>
        </StyledCatalog>
    )
}

export default Catalog;