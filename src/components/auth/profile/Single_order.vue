<template>
    <div class="container">
        <h4 class="font-italic mb-4">Products</h4>
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden bproduct-b bproduct-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 text-left">
                            <tr v-for="product in products" :key="product.id">
                                <td class="py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="ml-5">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ product.product.title}}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{product.price | currency}}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{product.quantity}}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{product.price * product.quantity | currency}}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="mx-10">
                            <div>
                                <td class="p-3 text-left">
                                    <strong>Subtotal </strong>
                                </td>
                                <td colspan="3" class="hidden-xs"></td>
                                <td class="pr-10">
                                   <strong>{{subtotal | currency}}</strong>
                                </td>
                            </div>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

   export default {
    data(){
        return {
            products: [],
        }
    },

    methods: {

        loadproduct(){
            let id = this.$route.params.id;
            axios.get(`order-test/${id}`).then(response => {
                this.products = response.data;
                console.log(response.data)
            });
        },

    },

    computed:{
        subtotal(){
            return this.products.reduce((a,b) => a+ (b.price * b.quantity), 0);
        }
    },
    mounted(){
        this.loadproduct();
    }

    }
</script>

<style scoped>

</style>



