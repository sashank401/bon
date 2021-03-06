import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { SpeechProvider } from "@speechly/react-client";


ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-mhygi17l.eu.auth0.com"
    clientId="P9XslLnbnkmg1eApfKsDEDA3nfEuEW9C"
    redirectUri= { window.location.origin + "/collections"} >
  <SpeechProvider appId="6b724e20-87d3-4fa9-82ce-e99734529001">
    <App />
    </SpeechProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
