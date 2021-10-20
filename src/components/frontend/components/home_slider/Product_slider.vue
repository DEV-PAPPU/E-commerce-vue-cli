<template>
    <div class="flex justify-bewteen items-center">
        <hooper :settings="hooperSettings" style="height:600px">
            <slide v-for="(product, indx) in products" :key="indx" :index="indx">
                <div
                    class="border-2 p-10 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm">
                    <img :src="product.image" class="product-image mx-auto">
                    <div class="p-6">

                        <!-- <h1 class="title-font text-lg font-medium text-gray-900 mt-2 mb-4">🔥 {{product.title | trim}} 🔥</h1> -->

                        <div class="flex items-center mx-auto">
                            <router-link :to="{name: 'Product-Single', params: {slug: product.slug}}"
                                class="text-white mx-auto inline-block rounded mr-3 bg-green-600 hover:bg-green-700 py-3 px-10">
                                View Product</router-link>

                            <!-- <button @click="addTocart(product)"
                                class="rounded bg-green-600 text-2xl text-white hover:bg-green-700 py-2 px-3">
                                <i class="las la-cart-plus"></i>
                            </button> -->

                        </div>

                    </div>
                </div>
            </slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide,
  Pagination as HooperPagination,
   } from 'hooper';

import 'hooper/dist/hooper.css';
import axios from 'axios'

export default ({
    components: {
      Hooper,
      Slide,
    HooperPagination,
      
    },
        data() {
        return {
            hooperSettings: {
             itemsToShow: 4,
             centerMode: true,
             autoPlay: true,
            hoverPause: true,
            transition: 600,
           },
           products:{},
        }
      },

    created() {
         axios.get('https://fakestoreapi.com/products').then(response=>{
                  this.products = response.data
        })
    },

    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
})
</script>

<style scoped>
.slider-section{
    position: relative;
}

.slider-content{
  position: absolute;
  top: 30px;
  left: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.product-image{
    height: 250px;
}

</style>
