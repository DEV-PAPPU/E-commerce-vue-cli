import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

//Important
import axios from 'axios';
// axios.defaults.baseURL = 'https://ecombackend.devpappu.com/api/'
axios.defaults.baseURL = 'http://ecommerce.test/api/'

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '4px'
})

import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);

// CxltToastr
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    timeOut: 5000,
    closeButton: true,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    color:'#9810B3',
    // progressBar: true,
}
Vue.use(CxltToastr, toastrConfigs)



Vue.component(
  'Toast', () => import('./components/assets/toast.vue')
);

Vue.component(
  'ContentLoading', () => import('./components/assets/loadingAnimation.vue')
);

Vue.component(
  'LoadingBg', () => import('./components/assets/loadingbg.vue')
);

Vue.component(
  'Breadcrumb', () => import('./components/frontend/partials/breadcrumb.vue')
);
Vue.component(
  'TopComponent', () => import('./components/frontend/partials/Top_component.vue')
);
  
Vue.component(
  'DefaultImage', () => import('./components/assets/defaultimg.vue')
);
  
Vue.config.productionTip = false


//Vue Filter to make first letter Capital
Vue.filter("strToUpper", function(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('currency', value=> {
    return '$' + parseFloat(value).toFixed(2);
});

Vue.filter('trim', value=> {
    if (!value) return ''
    return value.substring(0, 30) + '...'
});

Vue.filter('trimpost', value=> {
    if (!value) return ''
    return value.substring(0, 30) + '...'
});


Vue.filter('dateformat', value=> {
    if (!value) return ''
    return moment(String(value)).format('LL')
});

Vue.filter('kb', val => {
  return Math.floor(val/1024);  
});


// mixin
Vue.mixin({

  computed:{

      url(){
        return  'http://ecommerce.test';
        // return  'https://ecombackend.devpappu.com';
      },
  
      Authenticated(){
      return  this.$store.getters.Get_Authenticated;
    },
      AuthUser(){
      return  this.$store.getters.Get_User;
    },
  
      Loading(){
      return  this.$store.getters.Get_Loading;
      },

      currentRouteName() {
        return this.$route.name;
    }


  }

})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// Load With Auth systm
let auth = localStorage.getItem("token");
if(auth){
    // store.dispatch('authUser')
    store.commit('SET_AUTH_USER', true)
}


//Scroll To Top
router.afterEach(() => {
  window.scrollTo(0, 0);
});

// loading effect
router.beforeEach((to, from, next) => {
  store.commit('SET_LOADING', true);
  // this.$Progress.start()
    next();
});

router.afterEach(() => {
  setTimeout(() => {
    store.commit('SET_LOADING', false);
    // this.$Progress.finish()
  }, 1000)

});
