import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.vue'
import Components from './view/components.vue'
import Intro from './page/intro.md'
import Start from './page/start.md'
import Theme from './page/theme.md'
import { packages } from '@src/config.json'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { needShow: false },
    component: Home
  },
  {
    path: '/intro',
    name: 'intro',
    meta: { needShow: false },
    component: Intro
  },
  {
    path: '/start',
    name: 'start',
    meta: { needShow: false },
    component: Start
  },
  {
    path: '/theme',
    name: 'theme',
    meta: { needShow: false },
    component: Theme
  }
]
const childrens = []
packages.map((pkg) => {
  childrens.push({
    path: pkg.name.toLowerCase(),
    name: pkg.name.toLowerCase(),
    component: () => import(/* webpackChunkName: "intro" */ '@src/components/' + pkg.name.toLowerCase() + '/doc.md')
  })
})
routes.push({
  path: '/components',
  name: 'components',
  component: Components,
  meta: { needShow: true },
  children: childrens
})
export default new Router({
  routes: routes
})
