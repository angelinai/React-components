import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// instance of store
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);