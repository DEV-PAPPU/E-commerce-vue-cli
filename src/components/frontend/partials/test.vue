<template>
    <div class="header w-full fixed top-0  z-20 bg-green-600 text-white ">

        <div class="menu  justify-between  items-center flex py-5 lg:px-16 px-5">

            <!-- Website logo div-->
            <div class="logo">
                <router-link :to="{name: 'Home'}"><img src="./../../../assets/images/logo.png"
                        class="brang-logo" alt="" style="width:100px"></router-link>
                        
            </div>

            <!-- Menu itesms div-->

            
            <div class="list-none flex">
                
                <div class="phone-nav-icon lg:hidden">
                  <button @click="openmenu()" v-if="isPhoneOpen"><span class="text-4xl "><i class="las la-bars"></i></span></button>
                  <button @click="closemenu()" v-else><span class="text-4xl "><i class="las la-times-circle"></i></span></button>
                </div>

                <nav class="nav-menu lg:flex z-10 font-semibold uppercase " id="phonenav">
       
                    <li>
                                <router-link class="menu-item" :to="{name: 'Project'}">Projects</router-link>
                    </li>
                    <li>
                                <router-link class="menu-item" :to="{name: 'Skill'}">Skills</router-link>
                    </li>

                    <!-- <li>
                        <div class="auth-menu md:mt-3">

                            <div class="lg:flex" v-if="Authenticated">
                                <router-link class="menu-item" :to="{name: 'Profile'}">Profile</router-link>
                                <button  @click="logout()" class="menu-item">Logout</button>
                            </div>

                            <div class="lg:flex" v-else>
                                <router-link class="menu-item" :to="{name: 'Login'}">Log in</router-link>
                            </div>
                        </div>
                    </li> -->

                    <li>
                                <router-link class="menu-item" :to="{name: 'Contact'}">Contact</router-link>
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
      isPhoneOpen:true,
      
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

      openmenu(){
         document.getElementById("phonenav").style.display = "block"
         this.isPhoneOpen = false
      },

      closemenu(){
         document.getElementById("phonenav").style.display = "none"
         this.isPhoneOpen = true
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


@media screen and (max-width: 768px) {
   #phonenav{
       display: none;
   }
   
   nav.nav-menu {
    position: absolute;
    left: 0;
    top: 96%;
    background: rgb(3, 114, 90);
    width: 100%;
    padding: 10px;
}

nav.nav-menu > li{
    padding: 10px 0px;
    padding: 20px 0px;
    border-bottom: solid 3px rgb(3, 92, 72);
}

}

.brang-logo{
    padding: 0px;
}
</style>