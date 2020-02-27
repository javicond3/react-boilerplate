/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { AppContainer } from 'react-hot-loader';

//configuration to use hot-loader to perserve sate of components when changes occur
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(App)

if (module.hot) {
    module.hot.accept(App, () => {
        const newApp = require(App).default;
        render(newApp)

    })
}