import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import { createBrowserHistory } from 'history';

const mount = (el) => {
    const history = createBrowserHistory();

    ReactDOM.render(
        <App history={history} />,
        el
    )
}

if (proccess.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#hello-react-dev-app');
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }