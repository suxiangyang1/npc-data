import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Area from '../views/Area.vue'
import News from '../views/News.vue'
import Overall from '../views/Overall.vue'
import Rumors from '../views/Rumors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'area',
        component: () => import('../views/Area.vue')
      },
      {
        path: 'news',
        component: () => import('../views/News.vue')
      },
      {
        path: 'overall',
        component: () => import('../views/Overall.vue')
      },
      {
        path: 'rumors',
        component: () => import('../views/Rumors.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
