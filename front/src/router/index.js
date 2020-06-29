import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop/Shop'
import productDetail from '@/components/Shop/product-detail'
import kidsList from '@/components/Kids/kidsList'
import Kid from '@/components/Kids/Kid'
import cart from '@/components/Shop/v-cart'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/cart',
    name: 'cart',
    component: cart,
    props: true,
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: productDetail
  },
  {
    path: '/kids',
    name: 'kidsList',
    component: kidsList
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
