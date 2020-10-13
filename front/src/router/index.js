import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop/Shop'
import productDetail from '@/components/Shop/product-detail'
import kidsList from '@/components/Kids/kidsList'
import kidDetail from '@/components/Kids/kidDetail'
import cart from '@/components/Shop/v-cart'
import trainers from '@/components/trainers/Trainers'
import trainer from '../components/trainers/v-trainer'
import login from '../components/Auth/Login'
import registration from '../components/Auth/Registration'
import store from '../store'
import orders from '../components/Orders/Orders'
import orderDetail from '../components/Orders/OrderDetail'

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
    component: kidsList,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/kid/:id',
    props: true,
    name: 'kidDetail',
    component: kidDetail
  },
  {
    path: '/trainers',
    namet: 'trainers',
    component: trainers,
    
  },
  {
    path: '/trainer/:id',
    props: true,
    name: trainer,
    component: trainer,
    
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders
  },
  {
    path: '/order/:id',
    props: true,
    name: orderDetail,
    component: orderDetail,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {  
  store.dispatch("VERIFICATION_JWT").then(() => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
    
  } else {
    next()
  }
})

})

export default router
