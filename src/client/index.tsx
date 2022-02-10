import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import * as FullStory from '@fullstory/browser';
import ReactGA from 'react-ga';

const trackingID = 'G-99P06YTR29';
ReactGA.initialize(trackingID);

FullStory.init({ orgId: '169TY2' });

render(<App />, document.getElementById("root"));