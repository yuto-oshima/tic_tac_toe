import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main } from './components/pages/main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
