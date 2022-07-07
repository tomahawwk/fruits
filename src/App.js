import React, { useState } from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes } from 'react-router-dom';
import AppContext from './context';

import Header from './components/blocks/Header';
import AsideNav from './components/blocks/AsideNav';
import Menu from './components/blocks/Menu';

import Main from './pages/Main';
import Catalog from './pages/Catalog';

import fruits from './fruits.json'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
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
  const [menuOpened, setMenuOpened] = useState();

  return (
    <AppWrapper>
      <AppContext.Provider value={{menuOpened, setMenuOpened}}>
        <Header />
        <AsideNav />
        <Routes>
          <Route path="/" exact element={ <Main items={fruits}/> }/>
          <Route path="/catalog" exact element={ <Catalog/> }/>
        </Routes>
        <Menu />
      </AppContext.Provider>
    </AppWrapper>
  );
}

export default App;