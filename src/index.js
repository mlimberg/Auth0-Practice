import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import history from './history';

const router = (
  <Router history={history}>
    <App />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
