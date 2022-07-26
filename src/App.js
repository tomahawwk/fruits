import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AppContext from './context';

import Header from './components/blocks/Header';
import AsideNav from './components/blocks/AsideNav';
import Menu from './components/blocks/Menu';

import RouteAnimation from './components/elements/RouteAnimation';
import Cursor from './components/elements/Cursor';

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
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState();
  const [routeAnimation, setRouteAnimation] = useState();

  const timeout = {
    appear: 1000,
    enter: 2000,
    exit: 1000,
  }

  return (
    
    <AppWrapper>
      <AppContext.Provider value={{
        routeAnimation}}>
        <Header /> 
        <AsideNav menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={timeout} onEnter={() => setRouteAnimation(true)} onEntered={() => setRouteAnimation(false)}>
            <Routes location={location}>
              <Route path="/" exact element={<Main/>} />
              <Route path="/catalog" exact element={ <Catalog />}/>
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