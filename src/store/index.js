import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
      Authenticated:false,
      loading:false,
      Toast:'',
      Toastmassage:'',
      cartCount: '',
      test:''

 },
  getters: {
    Get_Loading(state){
      return state.loading;
    },
    Get_User(state){
      return state.user;
    },
    Get_Authenticated(state){
        return state.Authenticated;
    },

    Get_TOAST: state => {
        return state.Toast;
    },
    Get_TOAST_MASSAGE: state => {
        return state.Toastmassage;
    },
  },
  mutations:{
      SET_AUTH_USER(state, data){
          state.Authenticated = data;
          return axios.get('auth/refresh',{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(res => {

            state.user = res.data.user
            localStorage.removeItem('token')
            localStorage.setItem('token',res.data.access_token)
  
        }).catch(() => {
            state.user = null
            state.Authenticated = null
            if(router.currentRoute.name !== 'Login'){
                router.push({ name: 'Login' })
            }
        })
     },

      SET_LOADING(state, data){
          state.loading = data;

      },
      SET_USER(state, data){
          state.user = data;
      },
      SET_AUTHENTICATED(state,data){
          state.Authenticated = data;
      },
      SET_TOAST(state,data){
          state.Toast = data;
      },
      SET_TOAST_MASSAGE(state,data){
          state.Toastmassage = data;
      },
      ADD_TO_CART(state,product){
        
        let cart = [];
            
          if(localStorage.getItem('cart')){
              cart = JSON.parse(localStorage.getItem('cart'));
          }

          let items = cart.find(item => item.product_id === product.id);
          
          if (items) {
              items.quantity++
          }
          else{
                cart.push({
                name : product.title, 
                product_id : product.id, 
                image : product.image,
                price: product.price,
                quantity: 1
          });

          }

          localStorage.setItem('cart', JSON.stringify(cart));

        //  state.cartCount = 5
      },
  },

  actions:{
    authUser (commit) {
      commit('SET_AUTHENTICATED', true)
      return axios.get('auth/refresh',{
          headers:{
              authorization: 'Bearer' + localStorage.getItem('token')
          }
      }).then(res => {
          
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', res.data.user)
          localStorage.removeItem('token')
          localStorage.setItem('token',res.data.access_token)

          if(router.currentRoute.name !== null){
              router.push({ name: 'Home' })
          }

      })
    //   .catch(() => {
    //       commit('SET_AUTHENTICATED', false)

    //       if(router.currentRoute.name !== 'login'){
    //           router.push({ name: 'Login' })
    //       }
    //   })

    },

    test(commit){
      commit('SET_AUTHENTICATED', true)
      console.log('ok')
    }

  },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
