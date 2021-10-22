<template>
    <div class="pos_products">
        <tbody>

        </tbody>

        <div class="form">
            <form @submit.prevent="saleproduct">

                <div class="form-group">
                    <select v-model="form.payment_method" name="payment_method" id="payment_method"
                        class="form-control">
                        <option value="" style="display: none" selected>Select Payment Method </option>
                        <option value="0" selected>Hand Cash </option>
                        <option value="paypal" selected>Paypal</option>
                    </select>
                </div>


               <div v-if="form.payment_method == 'paypal'">
                   <Paypal/>
               </div>
                 

            </form>
        </div>
    </div>
</template>

<script>

import Paypal from '../components/new.vue'
export default {
  components:{Paypal},
  name: "HelloWorld",
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      form:{
         payment_method: '',
         price:''
      },
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
      }
    };
  },

};
</script>
