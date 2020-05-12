import Vue from 'vue'
import VueRouter from 'vue-router'
import { packages } from '@src/config.json'

const Index = () => import('./view/index.vue')
const DemoNav = () => import('./view/demonav.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    components: {
      main: Index,
      demonav: DemoNav
    }
  }
]

// 组件示例页面
packages.map(item => {
  if (item.showDemo === false) return
  const pkgName = item.name.toLowerCase()
  routes.push({
    path: '/' + pkgName,
    components: {
      main: () => import('@src/components/' + pkgName + '/demo.vue'),
      demonav: DemoNav
    },
    name: item.name
  })
})

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.path === '/index') {
      return null
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
