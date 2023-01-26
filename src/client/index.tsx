import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


// GA Tracking Init
const trackingID = 'G-99P06YTR29';
ReactGA.initialize(trackingID);

// GTM Tracking Init
const tagManagerArgs = {
    gtmId: 'GTM-WH64Z3D'
  }
TagManager.initialize(tagManagerArgs);

// Sentry Error Logging Init
Sentry.init({
  dsn: "https://0460c0780fe94b82b3bd64412014d5ec@o4504526251294720.ingest.sentry.io/4504527717990400",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

render(<App />, document.getElementById("root"));