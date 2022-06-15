import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenView from '@/views/ChildrenView'
import CompositionView from '@/views/CompositionView'
import PropsEmit from '@/views/PropsEmit'
import FunctionTest from '@/views/FunctionTest'
import RouterTest from '@/views/RouterTest'
import VuexTest from '@/views/VuexTest'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/children',
    name: 'ChildrenView',
    component: ChildrenView
  },
  {
    path: '/composition',
    name: 'CompositionView',
    component: CompositionView
  },
  {
    path: '/props-emit',
    name: 'PropsEmit',
    component: PropsEmit
  },
  {
    path: '/function-test',
    name: 'FunctionTest',
    component: FunctionTest
  },
  {
    path: '/router-test',
    name: 'RouterTest',
    component: RouterTest
  },
  {
    path: '/vuex-test',
    name: 'VuexTest',
    component: VuexTest
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
