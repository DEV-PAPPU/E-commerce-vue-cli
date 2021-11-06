<template>
    <div>
        <button class="h-12 mt-4 w-48 rounded font-medium text-md bg-blue-500 text-white" @click.prevent="checout_confirm">Checkout</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
      props:['products_with_form_data'],
    data: function(){
        return {
           
        }
    },

    methods: {
        checout_confirm: function(){
            // this.set_billing_address(this.products_with_form_data);
            // var stripe = Stripe("pk_test_51ImMYLL8CFL5l5NjFUVCtEZrritkVCduYkv3iXK0RnfxjpSHmo6pu9wMdA7CgBLsy2FEndolqr6n0iCUx6Cy1smn000d51tPbc");
            axios.post("/order",this.products_with_form_data,{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        })
            .then(function (response) {
                return response.data;
            })
            // .then(function (session) {
            //     // console.log('hi');
            //     return stripe.redirectToCheckout({ sessionId: session.id });
            // })
            .then(function (result) {
                // If redirectToCheckout fails due to a browser or network
                // error, you should display the localized error message to your
                // customer using error.message.
                if (result.error) {
                    alert(result.error.message);
                }
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
        }
    },

}
</script>

