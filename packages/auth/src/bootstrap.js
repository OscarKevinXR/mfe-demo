import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount Function to Start App
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || 
  createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el)

  return {
    onParentNavigate( {pathname: nextPathName} ) {
      const { pathname } = history.location

      if (pathname !== nextPathName){
        history.push(nextPathName)
      }        
    }
  }
}

// If we are in dev and in isolation, mount immediately
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_auth-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// WE are running though container and should export the mount
export { mount };
