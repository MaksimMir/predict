import * as React from 'react';
import * as ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './style.scss';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.querySelector('.app')
)