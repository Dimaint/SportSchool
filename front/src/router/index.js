import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop/Shop'
import KidsList from '@/components/Kids/KidsList'
import Kid from '@/components/Kids/Kid'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/kids',
    name: 'KidsList',
    component: KidsList
  },
  {
    path: '/kid/:id',
    props: true,
    name: 'kid',
    component: Kid
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
