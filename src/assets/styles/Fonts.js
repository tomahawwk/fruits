import { createGlobalStyle } from "styled-components";
import FacundoLight from '../fonts/facundo/Facundo-Light.woff';
import FacundoLight2 from '../fonts/facundo/Facundo-Light.woff2';

import FacundoRegular from '../fonts/facundo/Facundo-Regular.woff';
import FacundoRegular2 from '../fonts/facundo/Facundo-Regular.woff2';

import FacundoBold from '../fonts/facundo/Facundo-Bold.woff';
import FacundoBold2 from '../fonts/facundo/Facundo-Bold.woff2';

import Holimount from '../fonts/holimount/Holimount.otf';

const Fonts = createGlobalStyle`
    // Holimount
    @font-face {
        font-family: 'Holimount';
        src: url(${Holimount}) format('opentype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    // Facundo
    @font-face {
        font-family: 'Facundo';
        src: url(${FacundoLight}) format('woff'), url(${FacundoLight2}) format('woff2');
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: 'Facundo';
        src: url(${FacundoRegular}) format('woff'), url(${FacundoRegular2}) format('woff2');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'Facundo';
        src: url(${FacundoBold}) format('woff'), url(${FacundoBold2}) format('woff2');
        font-style: normal;
        font-weight: 600;
        font-display: swap;
    }
`;

export default Fonts;