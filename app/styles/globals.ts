'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    li {
      list-style-type: none;
    }
    
    html, body :root {
      height: 100%;
    }
    
    .leaflet-bottom,
    .leaflet-control,
    .leaflet-pane,
    .leaflet-top {
      z-index: 0 !important;
    }
    
    .rdrMonth {
      width: 100% !important;
    }
    
    .rdrCalendarWrapper {
      font-size: 16px !important;
      width: 100% !important;
    }
`;
