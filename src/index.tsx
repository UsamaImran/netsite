import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/scss/App.scss';
import "./styles/css/nucleo-icons.css";

document.body.classList.toggle("white-content");

Sentry.init({
  dsn: "https://57ed98f3f3b446aca140d3c6341e302e@o490350.ingest.sentry.io/5589554",
  autoSessionTracking: true,
  environment: process.env.NODE_ENV,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
