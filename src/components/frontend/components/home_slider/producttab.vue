<template>
  <div>
    <div class="flex mt-12 justify-center">
      <div class="px-8 grid lg:grid-cols-4 gap-5 grid-cols-2">
        <button @click="ProductTab('recent')"
          class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-5 px-8">Recent Products</button>
        <button @click="ProductTab('topselling')"
          class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-5 px-8">Top Selling
          Products</button>
        <button @click="ProductTab('man')"
          class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-5 px-8">Man Products</button>
        <button @click="ProductTab('woman')"
          class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-5 px-8">Woman Products</button>
      </div>
    </div>
    <div class="">
      <div v-if="tabitem == 'recent'">
        <RecentProduct />
      </div>
      <div v-else>
        <h2 class="my-10 text-center text-3xl">No Products!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import RecentProduct from '../home/products.vue'
export default {
  components:{RecentProduct},
  name: "App",
  data() {
            return {
                products:'',
                tabitem:'recent',
            }
            
        },
  mounted() {
   
  },
  methods: {
       ProductTab(tab){
           this.tabitem = tab
       }
    },
};
</script>

<style>

</style>
