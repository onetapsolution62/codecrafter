import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/services',
    component: () => import('../pages/Services.vue'),
    name: 'services'
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
    name: 'about'
  },
  {
    path: '/portfolio',
    component: () => import('../pages/Portfolio.vue'),
    name: 'portfolio'
  },
  {
    path: '/blog',
    component: () => import('../pages/Blog.vue'),
    name: 'blog'
  },
  {
    path: '/contact',
    component: () => import('../pages/Contact.vue'),
    name: 'contact'
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
    name: 'error404'
  }
]

export default routes