import { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage, setFilters, setCategoryId } from '../redux/filter/slice';
import { getFilterSelector } from '../redux/filter/selectors';
import { SearchParams, Fruit } from '../redux/fruits/types';
import { setLoading } from '../redux/fruits/slice';
import { fetchFruits } from '../redux/fruits/asyncActions';
import { getFruitsSelector } from '../redux/fruits/selectors';
import { getAnimationSelector } from '../redux/animation/selectors';
import Flex from '../components/helpers/Flex';
import { useAppDispatch } from '../redux/store';

import {
  Page,
  CardGrid,
  Card,
  Search,
  Section,
  Categories,
  SortDropdown,
  PageHead,
  Pagination,
} from '../components/blocks';

import { Content, Preloader, Error, SectionHead } from '../components/elements';
import { sortOptions } from '../components/blocks/SortDropdown';

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

    const onChangeCategory = useCallback((id: number) => {
      dispatch(setCategoryId(id));
    }, [])

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
      anchor.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    const getFruits = () => {
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
              currentPage: String(currentPage),
            })
          );
        }
      
        setTimeout(() => {
          getData();
        }, 600)
    }
    
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

    const catalogItems = localItems.map((item: Fruit) => (<Card key={item.index} {...item} />));

    return (
        <StyledCatalog mobileHeadImage="">
            <PageHead
                title="Catalog"
                subtitle="our goods"
                back={{ name: "Home", url: "/" }}
                next={{ name: "Articles", url: "/articles" }}
                background="./images/mobile-backgrounds/1.jpg"
            />
            <Section grey>
                <Content >
                    <div className="anchor" ref={anchor} />
                    <StyledCatalogHead>
                      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
                      <SectionHead desktop={true}>
                          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                          <SortDropdown select={sort} />
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