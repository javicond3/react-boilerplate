/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './assets/scss/custom_bootstrap.scss'
import './assets/scss/main.scss'

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app'),
    );
};

render(App)