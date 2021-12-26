<template>
    <div>
        <div class="">
            <div class="product border-b-2 border-gray-200 items-center">
                <div v-if="products.length"
                    class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10 shop my-10 py-10">
                    <div v-for="product in products" :key="product.id" class="">
                        <div class="mb-2">
                            <div
                                class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm">

                                <img :src="url+product.image" class="product-image">
                                <div class="p-6">

                                    <h1 class="title-font text-lg font-medium text-gray-900 mt-2 mb-4">{{product.title | trim}}
                                    </h1>

                                    <div class="flex items-center">
                                        <router-link :to="{name: 'Product-Single', params: {slug: product.slug}}"
                                            class="text-white inline-block rounded mr-3 bg-green-600 hover:bg-green-700 py-3 px-10">
                                            View Product</router-link>

                                        <button @click="addTocart(product)"
                                            class="rounded bg-green-600 text-2xl text-white hover:bg-green-700 py-2 px-3">
                                            <i class="las la-cart-plus"></i>
                                        </button>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                products:'',

            }
            
        },

        methods:{


        
        addTocart(product) {

            // localStorage.setItem('products', JSON.stringify(products));

            this.$store.commit('ADD_TO_CART', product);
            // this.$store.commit('SET_TOAST', 'success')
            // this.$store.commit('SET_TOAST_MASSAGE', 'Product added')
            // setTimeout(() => {
            //     this.$store.commit('SET_TOAST', false);
            //     }, 2000);

            this.$toast.success({
                    title:'Success!',
                    message:'Product added.'
                })
        },


       },

        mounted() {

            axios.get('shop').then(response=>{
                  this.products = response.data
            })
        }


    }
</script>


<style scoped>

</style>
