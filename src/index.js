import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Parent from './Parent'

ReactDOM.render(<Parent />, document.getElementById('root'));
serviceWorker.unregister();
