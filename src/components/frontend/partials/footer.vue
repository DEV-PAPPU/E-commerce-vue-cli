<template>
    <div class="">
        <div>
            <div class="footer lg:px-20 px-10 mt-28">

                <div class="title mb-5">
                    <h1 class="heading before-after  text-center text-4xl font-meduim">Get A Free Quote</h1>
                </div>

                <div class="footer-contact container-box grid lg:grid-cols-2 grid-cols-1 gap-10">

                    <div>
                        <img src="../../../assets/website/img/contact.png" class="lg:mt-1" width="500px" alt="">
                    </div>

                    <form class="py-8 items-center rounded lg:mt-7 w-full">
                        <div class="">
                            <label class="mb-3">Your Name:</label><br>
                            <input type="text" placeholder="Email"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 text-base px-4 py-2 mb-4" required><br>
                        </div>
                        <div class="">
                            <label class="mb-3">Your Email:</label><br>
                            <input type="text" placeholder="Email"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 text-base px-4 py-2 mb-4" required><br>
                        </div>
                        <div class="">
                            <label class="mb-3">Your Project Info:</label><br>
                            <input type="text" placeholder="Project"
                                class="input-widht mt-3 bg-white rounded w-full border border-gray-400 pb-16 text-base px-4 py-2 mb-4" required><br>
                        </div>
                        <button type="submit" value="Submit"
                            class="text-white  bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>


        <div class="lg:flex items-center text-center border-t-4 border-green-800 justify-between lg:px-20 bg-green-600 py-5 text-white">

            <div>
                <h4 class="text-lg ">© 2021 Devpappu.com . All Rights Reserved</h4>
            </div>

            <div class="social flex gap-5 text-center lg:px-0 px-16 lg:mt-0 mt-5">
                <a href="https://github.com/dev-pappu" class="bg-green-800 rounded-full px-3 py-2 text-3xl"><i class="lab la-github"></i></a>
                <a href="https://www.facebook.com/devpappusaha" class="bg-green-800 rounded-full px-3 py-2 text-3xl"><i class="lab la-facebook"></i></a>
                <a href="#" class="bg-green-800 rounded-full px-3 py-2 text-3xl"><i class="lab la-twitter"></i></a>
                <a href="#" class="bg-green-800 rounded-full px-3 py-2 text-3xl"><i class="lab la-linkedin"></i></a>
            </div>

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
