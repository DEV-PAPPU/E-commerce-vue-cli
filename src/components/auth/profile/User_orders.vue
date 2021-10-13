<template>
    <div class="container">
        <h4 class="font-italic mb-4">Orders</h4>

        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    #Tracking Id
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order Date
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order Status
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subtotal
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    View
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 text-left w-full">
                            
                        <!--Filter product-->
                        <template v-if="Loading" class="w-64">
                             <content-loading /> 
                        </template>

                            <tr v-else v-for="order in orders" :key="order.id">
                                <td class="py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="ml-5">
                                            <div class="text-sm font-medium text-gray-900">
                                                #{{ order.tracking }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{order.created_at | dateformat }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div v-if="order.status == 3">
                                        <span>Complate</span>
                                    </div>

                                    <div v-if="order.status == 0">
                                        <span>Processing</span>
                                    </div>

                                    <!-- <div v-else>
                                        <span>{{order.status}}</span>
                                    </div> -->

                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    {{order.subtotal | currency}}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <router-link :to="{name: 'Single-order', params: {id: order.id}}"
                                        class="text-white inline-block rounded tex-lg bg-green-600 hover:bg-green-700 py-1 px-3">
                                        <i class="las la-eye"></i></router-link>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot class="mx-10">

                        </tfoot>

                    </table>
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
                orders: [],
            }
        },

    mounted() {
        console.log('orders')
        axios.get('user-orders',{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(response => {
                    this.orders = response.data;
            });
    },

    }
</script>


<style scoped>

.nav-pills-custom .nav-link {
    color: #aaa;
    background: #fff;
    position: relative;
}

.nav-pills-custom .nav-link.active {
    color: #45b649;
    background: #fff;
}


/* Add indicator arrow for the active tab */
@media (min-width: 992px) {
    .nav-pills-custom .nav-link::before {
        content: '';
        display: block;
        border-top: 8px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 8px solid transparent;
        position: absolute;
        top: 30%;
        right: -10px;
        transform: translateY(-50%);
        opacity: 0;
    }
}

.nav-pills-custom .nav-link.active::before {
    opacity: 1;
}





/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*/
body {
    min-height: 100vh;
    background: linear-gradient(to left, #dce35b, #45b649);
}
</style>



