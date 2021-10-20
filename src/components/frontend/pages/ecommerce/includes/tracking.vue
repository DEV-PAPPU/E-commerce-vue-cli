<template>
    <div class="container">

        <div class="flex justify-center">
            <div class="py-6 px-8 bg-white rounded shadow-xl w-1/2 text-left border-l-8 border-green-600">

                <form v-if="isForm" @submit.prevent="ordertrack">
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">{{form_title}}</label>
                        <input type="text" v-model="form.number" placeholder="number"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />

                    </div>

                    <button type="submit"
                        class="cursor-pointer py-2 px-4  mt-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded">Track</button>
                </form>

                <div v-if="Trackingdata" class="trackingdata">
                   <h2>Your order status</h2>
                   <div class="mt-5">
                      <span v-if="Trackingdata[0].status == '0'" class=" bg-green-600 p-2 text-white rounded"> Processing</span>
                      <span v-if="Trackingdata[0].status == '3'" class=" bg-green-600 p-2 text-white rounded"> Complate</span>
                   </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

   export default {
        metaInfo: {
        title: 'Order Tracking',
        },
     data: () => ({
        form_title: 'Track Your Order Status',
        Trackingdata: '',
        isForm: true,
        form: {
          number: '',
      },

      }),

        methods: {

           ordertrack() {
                axios.post('order-tracking',this.form).then(res => {
                 this.Trackingdata = res.data;
                
                if(res.data.length){
                    console.log(res)
                 }else{
                    this.$store.commit('SET_TOAST', 'error')
                    this.$store.commit('SET_TOAST_MASSAGE', 'Invalid order id!')
                    setTimeout(() => {
                    this.$store.commit('SET_TOAST', false);
                    }, 3000);
                 } 

                 this.isForm = false;
                 this.form_title = 'Your Order Status'
                })
            },

        },

    }
</script>
