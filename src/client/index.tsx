import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

const trackingID = 'G-99P06YTR29';
ReactGA.initialize(trackingID);

const tagManagerArgs = {
    gtmId: 'GTM-WH64Z3D'
  }
  
TagManager.initialize(tagManagerArgs);



render(<App />, document.getElementById("root"));