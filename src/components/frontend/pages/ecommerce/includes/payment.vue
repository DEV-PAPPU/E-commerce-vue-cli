<template>
    <form class="flex justify-center">
        <div class="content px-5 py-12 bg-white shadow-lg rounded-lg lg:w-6/12">
            <div class="form-group">
                <label for="payment_method">Payment Method</label>

                <select v-model="form.payment_method" @change="change_payment_Method()" id="payment_method"
                    class="mt-3 w-full p-2 border border-gray-300 ">
                    <option value="" selected>Select Payment Method</option>
                    <option value="cod" selected>Cash on Delivery (COD)</option>
                    <option value="paypal" selected>Paypal</option>
                    <!-- <option value="stripe" selected>Stripe</option> -->
                </select>

                <div v-if="form.payment_method == 'stripe'" class="paypal-getway">
                    <Stripe :products_with_form_data="form" />
                </div>

                <div v-if="form.payment_method == 'paypal'" class="paypal-getway">
                    <Paypal :products_with_form_data="form" />
                </div>

                <button v-if="form.payment_method == 'cod'" @click.prevent="order" class="h-12 mt-4 w-48 rounded font-medium text-md bg-blue-500 text-white">Order Confirm</button>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import Paypal from '../../paypal/paypal.vue'
import Stripe from '../../paypal/stripe.vue'
export default {
    components:{Paypal,Stripe},
     metaInfo: {
        title: 'Payment',
        },
    data(){
       return{
           form:{
               email: '',
               first_name: '',
              address: '',
              zipcode: '',
               state: '',
               city: '',
               country: '',
              phone: '',
              discount_price: '',
              payment_method: '',
              subtotal:'',
              products:[],
           },
       }
    },

    methods: {

          order() {
                axios.post('order', this.form,{
                    headers:{
                        authorization: 'Bearer' + localStorage.getItem('token')
                    }
                    }).then(response => {
                        const massage = response.data.massage
                              
                            if(massage){
                                localStorage.removeItem('cart')
                            }

                            this.$router.push({name:'Order-complated'});
                        })
                        .catch(e =>{this.errors = e.response.data.errors;});
            },

           change_payment_Method(){
             localStorage.setItem('checkoutForm', JSON.stringify(this.form));

           }

        },

       mounted(){
          this.form = JSON.parse(localStorage.getItem('checkoutForm'));
          this.form.products = JSON.parse(localStorage.getItem('cart'));
       }

}
</script>


