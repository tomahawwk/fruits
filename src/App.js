import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { setLoading, setCurrentPage, setFilters } from './redux/slices/filterSlice';

import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AppContext from './context';

import Header from './components/blocks/Header';
import AsideNav from './components/blocks/AsideNav';
import Menu from './components/blocks/Menu';
import { sortOptions } from './components/blocks/Sort';

import RouteAnimation from './components/elements/RouteAnimation';
import Cursor from './components/elements/Cursor';

import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-size: 16px;
  padding: 0px 0px 0px 0px;
  ${props => fluidRange({
    prop: 'padding-left',
    fromSize: `${props.theme.navSize.tablet}px`,
    toSize: `${props.theme.navSize.desktop}px`,
  },
  props.theme.screen.tablet,
  props.theme.screen.desktop,
  )}
  @media (max-width: ${props => props.theme.screen.tablet}){
    ${props => fluidRange({
      prop: 'padding-left',
      fromSize: `${props.theme.unit.tablet}px`,
      toSize: `${props.theme.unit.desktop}px`,
    },
    props.theme.screen.tablet,
    props.theme.screen.desktop,
    )}
  }
`

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const [menuOpened, setMenuOpened] = useState();
  const [routeAnimation, setRouteAnimation] = useState();
  const { categoryId, currentPage } = useSelector(state => state.filter);
  const sort = useSelector(state => state.filter.sort);
  const [catalogItems, setCatalogItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  }

  const timeout = {
    appear: 1000,
    enter: 2000,
    exit: 1000,
  }

  const fetchFruits = () => {
    dispatch(setLoading(true))
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const order = sort.value.includes('-') ? 'asc' : 'desc';
    const sortValue = sort.value.replace('-', '');
    async function fetchData() {
      try{
        const [catalogItemsResponse] = await Promise.all([
          axios.get(`https://62bcc3246b1401736c008049.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sortValue}&order=${order}${search}`)
        ]);
        catalogItemsResponse.data.forEach((item, index) => {
          item.index = index;
        })
        setCatalogItems(catalogItemsResponse.data);
        setTimeout(() => {
          dispatch(setLoading(false))
        }, 600)
      }
      catch(error){ 
        console.log("Ошибка при запросе фруктиков")
      }
    }
    setTimeout(() => {
      fetchData();
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
    if(!isSearch.current) {
      fetchFruits();
    }
    isSearch.current = false;
  }, [categoryId, sort.value, searchValue, currentPage]);

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
  
  return (
    <AppWrapper>
      <AppContext.Provider value={{
        routeAnimation}}>
        <Header /> 
        <AsideNav menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={timeout} onEnter={() => setRouteAnimation(true)} onEntered={() => setRouteAnimation(false)}>
            <Routes location={location}>
              <Route path="/" exact element={<Main/>} />
              <Route path="/catalog" exact element={
                <Catalog 
                  catalogItems={catalogItems}
                  setCurrentPage={onChangePage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  sortType={sort.value}
                  categoryId={categoryId}
                  />
              }/>
              <Route path="/articles" exact element={ <Articles />}/>
              <Route path="*" exact element={ <NotFound/>}  />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} setRouteAnimation={setRouteAnimation}/>
        <RouteAnimation animation={routeAnimation} menuOpened={menuOpened} />
        <Cursor />
      </AppContext.Provider>
    </AppWrapper>
  );
}

export default App;