<template>
    <div class="">
         <!-- <h1>Your Profile</h1> -->
         <div class="content flex justify-center gap-5 text-left">
             <div class="menu-nav w-48">
                 <router-link :to="{name: 'Profile'}"
                    class="text-white inline-block rounded bg-green-600 hover:bg-green-700 py-3 px-10 w-48">
                    Dashboard</router-link>
                
                 <router-link :to="{name: 'User-Orders'}"
                    class="text-white inline-block rounded  bg-green-600 hover:bg-green-700 py-3 px-10 w-48 mt-3">
                    Orders</router-link>
             </div>

             <div class="info bg-white rounded py-5 px-10 w-4/6">

                  <div v-if="$router.currentRoute.name === 'Profile'">
                      <UserProfile/>
                  </div>

                  <router-view/>
             </div>
         </div>
    </div>
</template>

<script>
import UserProfile from './profile/User_data.vue'
import axios from 'axios'
   export default {
       components:{UserProfile},
        metaInfo: {
        title: 'Profile',
        },
        data() {
            return {
                orders: [],
                user:{}
            }
        },

    mounted() {
        axios.get('auth/user',{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(response => {
                    this.user = response.data;
            });

            

    },


    }
</script>


<style scoped>

.nav-pills-custom .nav-link {
    color: #aaa;
    background: #fff;
    position: relative;
}

.nav-pills-custom .nav-link.active {
    color: #45b649;
    background: #fff;
}


/* Add indicator arrow for the active tab */
@media (min-width: 992px) {
    .nav-pills-custom .nav-link::before {
        content: '';
        display: block;
        border-top: 8px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 8px solid transparent;
        position: absolute;
        top: 30%;
        right: -10px;
        transform: translateY(-50%);
        opacity: 0;
    }
}

.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}





/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*/
body {
    min-height: 100vh;
    background: linear-gradient(to left, #dce35b, #45b649);
}
</style>



