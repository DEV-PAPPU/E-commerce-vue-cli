<template>
         <div class="lg:flex justify-center gap-5 text-left">

             <div class="menu-nav lg:w-48">
                 <router-link :to="{name: 'Profile'}"
                    class="text-white inline-block rounded bg-green-600 hover:bg-green-700 py-3 px-10 w-48">
                    Dashboard</router-link>
                
                 <router-link :to="{name: 'User-Orders'}"
                    class="text-white inline-block rounded  bg-green-600 hover:bg-green-700 py-3 px-10 w-48 lg:mt-3 ">
                    Orders</router-link>
             </div>

             <div class="info bg-white rounded py-5 px-10 lg:w-4/6">
                  <div v-if="$router.currentRoute.name === 'Profile'">
                      <UserProfile/>
                  </div>
                  <router-view/>
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

@media  (max-width: 800px) {
 .menu-nav{
     display: flex;
     gap: 10px;
     margin-bottom: 20px;
     align-items: center;
 }
}

</style>



