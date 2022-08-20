import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { setRouteAnimation, setAppearAnimation } from './redux/animation/slice';
import { getAnimationSelector } from './redux/animation/selectors';

import { Header, AsideNav, Menu } from './components/blocks';

import { RouteAnimation, Cursor } from './components/elements';

import { Main, Catalog, Articles, NotFound, Product, Cart } from './pages';

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
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const {routeAnimate} = useSelector(getAnimationSelector);
  
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
            <Route path="/" element={ <Main/> } />
            <Route path="/catalog" element={ <Catalog /> }/>
            <Route path="/articles" element={ <Articles />}/>
            <Route path="/cart" element={ <Cart />}/>
            <Route path="/catalog/:id" element={ <Product />}/>
            <Route path="*" element={ <NotFound/>}  />
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