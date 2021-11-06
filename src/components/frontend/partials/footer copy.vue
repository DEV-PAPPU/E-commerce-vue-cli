<template>
    <div class="">
        <div>
            <div class="footer px-20 mt-28">

                <div class="title mb-5">
                    <h2 class="text-center text-4xl font-meduim">Contact With Us For Your Product</h2>
                    <!--<h1 class="heading before-after  sm:pl-9 text-md text-center">Get A Free Quote</h1>
                    <h1 class="heading before-after lg:ml-24 lg:pl-16 md:ml-24 md:pl-8 text-md content-hide-767">Contact</h1>-->
                </div>

                <div class="footer-contact container-box grid grid-cols-2 gap-10">
                   
                    <div>
                        <img src="../../../assets/website/img/contact.png" class="lg:mt-1" width="500px" alt="">
                    </div>

                    <form  class="py-8 items-center rounded mt-7 w-full">
                        <div class="">
                            <label class="mb-3">Your Name:</label><br>
                            <input type="text" placeholder="Email"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 text-base px-4 py-2 mb-4"><br>
                        </div>
                        <div class="">
                            <label class="mb-3">Your Email:</label><br>
                            <input type="text" placeholder="Email"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 text-base px-4 py-2 mb-4"><br>
                        </div>
                        <div class="">
                            <label class="mb-3">Your Project Info:</label><br>
                            <input type="text" placeholder="Project"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 pb-16 text-base px-4 py-2 mb-4"><br>
                        </div>
                        <button type="submit" value="Submit"
                            class="text-white  bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="footer-innner border-t-2 border-gray-200  px-20">

        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {

      data() {
          return {
              publicPath: process.env.BASE_URL

          }
      },
    methods:{
      logout(){
          axios.post('/api/auth/logout',{token: localStorage.getItem('token')})
                .then(() =>{
                    this.$store.commit('SET_AUTHENTICATED', false);
                    this.$store.commit('SET_USER', '');
                    localStorage.removeItem("token");
                    this.$router.push({name:'home'});
                })
      },


    },
}
</script>
