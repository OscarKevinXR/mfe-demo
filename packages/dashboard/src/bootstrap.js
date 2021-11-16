import {createApp} from 'vue'
import Dashboard from './components/Dashboard.vue'

// Mount Function to Start App
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el);
}

// If we are in dev and in isolation, mount immediately
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_dashboard-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

// WE are running though container and should export the mount
export { mount };
