import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);