import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css';
import './css/index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'
// axios.defaults.timeout = 0;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.MyCustomField = 'foobar';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

