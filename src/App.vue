<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <!-- custom top component -->
    <top-component></top-component>
      <Toast/>
    <div class="router mt-10 px-20">
      <router-view/>
      <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
    </div>
   <Footer/>
  </div>
</template>

<script>
import Header from './components/frontend/partials/header.vue'
import Footer from './components/frontend/partials/footer.vue'
import TopComponent from './components/frontend/partials/Top_component.vue'
export default {
   components:{Header,Footer,TopComponent},

    mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>


<style>
.router-link-active {
  color: #f8f8f8;
  background: #2a885f;
  border-radius: 5px;
  
}


</style>
