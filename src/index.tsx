import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Styles 
import './assets/styles/normalize.css'
import './assets/styles/routing.css'
import './assets/styles/fonts.css'

import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    black: "#000000",
    grey: "#202020",
    grey2: "#141416",
    grey3: "#0C0C0C",
    grey4: "#07060B",
    grey5: "#929292",
    grey6: "#555555",
    grey7: "#ADADAD",
    yellow: "#fbe201",
    light: "#FFF",
    altLight: "#F9F3DF",
    text: "#818183"
  },
  screen: {
    phone: "425px",
    tabletMin: "600px",
    tablet: "900px",
    desktopMin: "1240px",
    desktop: "1440px"
  },
  fonts: {
    primary: "Facundo",
    secondary: "Holimount"
  },
  navSize: {
    desktop: "110",
    tablet: "80"
  },
  headerSize: {
    desktop: "140",
    tablet: "70",
    phone: "60",
  },
  unit: {
    desktop: "80",
    tablet: "35",
    phone: "16"
  },
  transition: {
    duration: ".5s",
    function: "cubic-bezier(.165,.84,.44,1)",
  }
}

const Global = createGlobalStyle`
  body {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    background: ${theme.colors.black};
    color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const rootElement = document.getElementById('root');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  );
}