import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount Function to Start App
const mount = (el) => {
  ReactDOM.render(<App/>, el)
}

// If we are in dev and in isolation, mount immediately
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// WE are running though container and should export the mount
export { mount };
