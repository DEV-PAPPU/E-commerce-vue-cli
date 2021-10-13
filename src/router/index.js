import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/frontend/pages/home.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../components/frontend/pages/ecommerce/shop.vue')
  },
  {
    path: '/shop/product/:slug',
    name: 'Product-Single',
    component: () => import(/* webpackChunkName: "Product-Single" */ '../components/frontend/pages/ecommerce/single.vue')
  },
  {
    path: '/shopping-cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../components/frontend/pages/ecommerce/includes/cart.vue')
  },
  {
    path: '/grag',
    name: 'Drag-File',
    component: () => import(/* webpackChunkName: "Drag-File" */ '../components/frontend/pages/dragfile.vue')
  },
  {
    path: '/order-tracking',
    name: 'Order-tracking',
    component: () => import(/* webpackChunkName: "Order-tracking" */ '../components/frontend/pages/ecommerce/includes/tracking.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../components/auth/login.vue')
  },
  {
    path: '/regiser',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../components/auth/register.vue')
  },

   // Authenticate user routes
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../components/auth/userdashboard.vue'),

    // beforeEnter: (to, from, next) => {
    //   if(store.state.Authenticated == 'true'){
    //       next();
    //   }else{
    //       return next({ name: 'Login'});
    //   }
    // },

    children:[
      {
        path: '/profile/orders',
        name: 'User-Orders',
       component: () => import(/* webpackChunkName: "User-Orders" */ '../components/auth/profile/User_orders.vue')
      },
      {
        path: '/profile/order/:id',
        name: 'Single-order',
       component: () => import(/* webpackChunkName: "Profile" */ '../components/auth/profile/Single_order')
      },
    ]
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "Checkout" */ '../components/frontend/pages/ecommerce/includes/checkout.vue')
  },
  {
    path: '/password/reset',
    name: 'Password-reset',
    component: () => import(/* webpackChunkName: "Password-reset" */ '../components/auth/Password_reset')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../components/testing')
  },
  {
    path: '/shop/category/:slug',
    name: 'Category-products',
    component: () => import(/* webpackChunkName: "test" */ '../components/frontend/pages/ecommerce/product_of_category.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
})

export default router;
