import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AppContext from './context';

import Header from './components/blocks/Header';
import AsideNav from './components/blocks/AsideNav';
import Menu from './components/blocks/Menu';

import RouteAnimation from './components/elements/RouteAnimation';

import Main from './pages/Main';
import Catalog from './pages/Catalog';
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
`

const App = () => {
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState();
  const [routeAnimation, setRouteAnimation] = useState();
  const [mainItems, setMainItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ value: 'rating', label: 'rating '});

  const timeout = {
    appear: 1000,
    enter: 2000,
    exit: 1000,
  }

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try{
        const [itemsResponse] = await Promise.all([
          axios.get(`https://62bcc3246b1401736c008049.mockapi.io/main-fruits?${
            categoryId > 0 ? `category=${categoryId}` : '' 
          }&sortBy=${sortType.value.replace('-', '')}&order=${sortType.value.includes('-') ? 'asc' : 'desc'}`)
        ]);
        setMainItems(itemsResponse.data);
        setIsLoading(false);
      }
      catch(error){ 
        console.log("Ошибка при запросе фруктиков")
      }
    }
    setTimeout(() => {
      fetchData();
    }, 700)
    console.log(sortType)
  }, [categoryId, sortType])

  return (
    <AppWrapper>
      <AppContext.Provider value={{
          menuOpened, 
          setMenuOpened, 
          isLoading, 
          setIsLoading,
          routeAnimation,
          categoryId,
          setCategoryId,
          sortType,
          setSortType}}>
        <Header /> 
        <AsideNav />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={timeout} onEnter={() => setRouteAnimation(true)} onEntered={() => setRouteAnimation(false)}>
            <Routes location={location}>
              <Route path="/" exact element={<Main items={mainItems}/>} />
              <Route path="/catalog" exact element={ <Catalog/>}/>
              <Route path="*" exact element={ <NotFound/>}  />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Menu />
        <RouteAnimation />
      </AppContext.Provider>
    </AppWrapper>
  );
}

export default App;