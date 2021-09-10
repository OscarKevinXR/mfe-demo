import React from 'react';
import ReactDOM from 'react-dom';

// Mount Func to Startup App
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    );
};

// If we are in dev and isolated, mount immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot){
        mount(devRoot);
    }

}

// Else we are running through container and we shoud export mount func
export { mount } ;