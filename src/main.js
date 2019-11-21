import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./pages/swipe-down')
  },
  {
    path: '/swipe-right',
    component: () => import('./pages/swipe-right')
  },
  {
    path: '/swipe-down',
    component: () => import('./pages/swipe-down')
  },
  {
    path: '/rotate',
    component: () => import('./pages/rotate')
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
