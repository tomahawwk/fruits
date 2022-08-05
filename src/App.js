import React, { useState } from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { setRouteAnimation, setAppearAnimation } from './redux/slices/animationSlice';

// Blocks
import Header from './components/blocks/Header';
import AsideNav from './components/blocks/AsideNav';
import Menu from './components/blocks/Menu';

// Elements
import RouteAnimation from './components/elements/RouteAnimation';
import Cursor from './components/elements/Cursor';

// Pages
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

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
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState();
  const {routeAnimate} = useSelector(state => state.animation);

  const timeout = {
    appear: 1000,
    enter: 2000,
    exit: 1000,
  }
  
  return (
    <AppWrapper>
      <Header menuOpened={menuOpened} setMenuOpened={setMenuOpened}/> 
        <AsideNav menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={timeout}
            onEnter={() => dispatch(setRouteAnimation(true))}
            onExited={() => dispatch(setAppearAnimation(true))}
            onEntered={() => {
              dispatch(setRouteAnimation(false))
              dispatch(setAppearAnimation(false))
            }}
            >
            <Routes location={location}>
              <Route path="/" exact element={ <Main/> } />
              <Route path="/catalog" exact element={ <Catalog /> }/>
              <Route path="/articles" exact element={ <Articles />}/>
              <Route path="/cart" exact element={ <Cart />}/>
              <Route path="*" exact element={ <NotFound/>}  />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        <RouteAnimation animation={routeAnimate} menuOpened={menuOpened} />
        <Cursor />
    </AppWrapper>
  );
}

export default App;