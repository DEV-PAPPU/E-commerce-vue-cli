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
   components:{Header,Footer,TopComponent}
}
</script>


<style>
.router-link-active {
  color: #f8f8f8;
  background: #2a885f;
  border-radius: 5px;
  
}


</style>
