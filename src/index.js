import React from 'react';
import ReactDOM from 'react-dom/client';
import 'materialize-css';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Main';
// import MainRedux from './MainRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Main />
    </Provider>,
);

