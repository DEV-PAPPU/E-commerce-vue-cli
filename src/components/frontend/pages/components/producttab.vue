<template>
  <div id="app " class="flex justify-center">
     <div class="tabs  gap-6 content-center items-center ">
          <button class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-1 px-3">Recent Products</button>
          <button class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-1 px-3">Top Selling Products</button>
          <button class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-1 px-3">Mens Products</button>
     </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSocialauth from "vue-social-auth";
import axios from "axios";

export default {
  name: "App",
  mounted() {
    Vue.use(axios);
    Vue.use(VueSocialauth, {
      providers: {
        github: {
          clientId: "659715154536727",
          redirectUri:
            "http://ecommerce.test/user/login/github",
        },
      },
    });
  },
  methods: {
    AuthProvider(provider) {
      var self = this;

      this.$auth
        .authenticate(provider)
        .then((response) => {
          console.log(response);
          self.SocialLogin(provider, response);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    SocialLogin(provider, response) {
      axios.post("/api/socialLogin/" + provider,
          response
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
