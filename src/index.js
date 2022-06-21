import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom'
axios.defaults.baseURL = 'https://cuetech.pythonanywhere.com/api/v1/';
// axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

ReactDOM.render(


  <React.StrictMode>
    <App />
  </React.StrictMode>


  ,
  document.getElementById('root')
);

