import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Status from '../views/Status.vue'
import Profile from '../views/Profile.vue'
import Nav from '../views/Nav.vue'
import NewProfile from '../views/NewProfile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing

  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu

  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart

  },
  {
    path: '/status',
    name: 'Status',
    component: Status

  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile

  },
  {
    path: '/Nav',
    name: 'Nav',
    component: Nav

  },
  {
    path: '/newProfile',
    name: 'NewProfile',
    component: NewProfile

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
