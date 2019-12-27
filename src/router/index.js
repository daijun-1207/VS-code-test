import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home.vue'
import search from '../components/page/search.vue'
import cart from '../components/page/cart'
import user from '../components/page/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/search',
      component: search,
    },
    {
      path: '/cart',
      component: cart,
    },
    {
      path: '/user',
      component: user,
    },
  ]
})

