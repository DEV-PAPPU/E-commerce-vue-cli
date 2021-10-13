<template>
    <div class="shop">
        <top-component>
            <Breadcrumb :breadcrumb="breadcrumb"/>
        </top-component>
        <div class=" flex gap-10">
            <div class="filter bg-white p-4 rounded w-48 border-l-8 border-green-600">
                <h1 class="bg-green-600 text-sm rounded p-2 text-white">Product Filter</h1>
                <div class="form mt-5">
                    <form @submit.prevent="filter">
                        <input type="range" v-model="form.price_range" id="" min="10" max="1000">
                        <div class="range-value">
                            <div class="output flex gap-10">
                                <span>$10</span>
                                <span>$ {{form.price_range}}</span>
                            </div>
                            <button class="mt-3 text-sm text-white bg-green-600 rounded py-1 px-5">Filter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div v-if="products.length" class="product grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div v-for="product in products" :key="product.id" class="">

                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                           <content-loading/>
                     </template>


                    <template v-if="isFilter" class="w-full">
                        <content-loading /> 
                    </template>

                    <!-- Content -->
                    <div v-else class="mb-2">
                        <div
                            class="border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm border-b-8 border-green-700">

                            <img :src="url+product.image" class="product-image">
                            <div class="p-6">

                                <h1 class="title-font text-lg font-medium text-gray-900 flex gap-3 items-center">
                                    {{product.price | currency}} <span class="text-right text-white text-sm bg-green-600 rounded py-1 px-2">{{product.category.name}}</span></h1>
                                <h1 class="title-font text-sm font-medium text-gray-900 mt-2 mb-4">{{product.title}}

                                </h1>
                                <div class="flex items-center">
                                    <router-link :to="{name: 'Product-Single', params: {slug: product.slug}}"
                                        class="text-white inline-block rounded mr-3 bg-green-600 hover:bg-green-700 py-1 px-10">
                                        View</router-link>

                                    <button @click="addTocart(product)"
                                        class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-1 px-3">
                                        <i class="las la-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <tbody v-else>
                <tr>
                    <td colspan="6">
                        <h5 class="text-center mt-4 mb-4">No product Found.</h5>
                    </td>
                </tr>
            </tbody>

        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
     metaInfo: {
        title: 'Product category',
        },
    data(){
        return {
            products: [],
            breadcrumb: [
                {
                name: 'shop',
                },
                {
                name: 'category products',
                },
            ],
            isFilter: false,
            form:{
                price_range:10
            }
        }
    },
    methods: {
        loadproduct(){
            let slug = this.$route.params.slug;
            axios.get(`category/single/${slug}`).then(response => {
                this.products = response.data;
            });
        },
    },

    mounted() {
        this.loadproduct();
    },
}
</script>

