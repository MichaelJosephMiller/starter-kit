
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, About } from '../pages'

// Set main title for app
const title = 'Starter Kit'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home | ' }
  },
  { path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About | ' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  documentTitle: title
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + title
  next()
})

export default router
