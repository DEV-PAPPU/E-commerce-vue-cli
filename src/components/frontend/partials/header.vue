<template>
    <div class="header bg-green-600 text-white">

        <div class="menu flex justify-between items-center lg:flex py-5 px-16 ">

            <!-- Website logo div-->
            <div class="logo">
                <router-link :to="{name: 'Home'}"><img src="https://development.rooberp.com/Devpappu/pappu.png"
                        class="brang-logo" alt="" style="width:100px"></router-link>
            </div>

            <!-- Menu itesms div-->

            <div class="phone lg:hidden">
               <span class="text-4xl "><i class="las la-bars"></i></span>
            </div>

            <div class="list-none flex">

                <div @click="phonemenu()" class="phone-menu">
                    <a href="#" id="icon-menu"><i class="fa fa-bars"></i></a>
                </div>

                <nav class="nav-menu lg:flex">

                    <!-- <li>
                        <router-link class="menu-item" :to="{name: 'Home'}">Home</router-link>
                    </li> -->
                    
                    <li>
                        <router-link class="menu-item" :to="{name: 'Shop'}">Shop</router-link>
                    </li>
                    <!-- <li>
                        <router-link class="menu-item" :to="{name: 'Drag-File'}">Drag-File</router-link>
                    </li> -->

                    <li>
                        <router-link class="menu-item" :to="{name: 'Cart'}">Cart</router-link>
                    </li>

                    <li>
                                <router-link class="menu-item" :to="{name: 'Order-tracking'}">Order Tracking</router-link>
                    </li>

                    <li>
                        <div class="auth-menu md:mt-3">

                            <div class="lg:flex" v-if="Authenticated">
                                <router-link class="menu-item" :to="{name: 'Profile'}">Profile</router-link>
                                <button  @click="logout()" class="menu-item">Logout</button>
                            </div>

                            <div class="lg:flex" v-else>
                                <router-link class="menu-item" :to="{name: 'Register'}">Register</router-link>
                                <router-link class="menu-item" :to="{name: 'Login'}">Log in</router-link>
                            </div>
                        </div>
                    </li>
                </nav>

            </div>

        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {

    data: () => ({
      isPhoneMenu:false,
      
    }),

    methods:{
      logout(){
          axios.post('auth/logout',{token: localStorage.getItem('token')})
                .then(() =>{
                    this.$store.commit('SET_AUTHENTICATED', false);
                    this.$store.commit('SET_USER', '');
                    localStorage.removeItem("token");
                    this.$router.push({name:'Home'});
                })
      },

      phonemenu(){

      },

      mounted() {
          
      },


    },
}
</script>

<style scoped>
.menu-item{
padding: 10px 25px ;
}
.menu-item{
margin: 0px 5px ;
}

.auth-menu{
    margin-top: -10px;
}
</style>