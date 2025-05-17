import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Import custom CSS
import './styles/main.css'

// Import app components
import App from './App.vue'
import routes from './router'

// Configure router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: '#0A2342',
      secondary: '#2CA58D',
      accent: '#FF6B6B',
      dark: '#1d1d1d',
      'dark-page': '#121212',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    },
    notify: {},
    loading: {},
    loadingBar: {
      color: 'accent',
      size: '3px',
      position: 'top'
    }
  }
})
app.use(router)

// Mount app
app.mount('#app')