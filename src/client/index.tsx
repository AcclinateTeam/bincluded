import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import * as FullStory from '@fullstory/browser';


FullStory.init({ orgId: '169TY2' });

render(<App />, document.getElementById("root"));