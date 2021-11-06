<template>
  <div class="mt-3 paypal-payment">
    <div ref="paypal"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['products_with_form_data'],
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        description: "leg lamp from that one movie",
      }
    };
  },
  mounted(){
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AdGH9Y0lFtkfPAw2gFkQRa12l1YJKEiZsQq89pnZxPNw3H2I_Bu4Uw0uUomQU0xd4jZQiv8P5DkSAuE1";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    console.log('Paypal')
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.products_with_form_data.subtotal
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
            this.$router.push({name:'Order-complated'});
            this.$emit('onApprove');
            alert('payment done');
            this.order();

          },
          onError: err => {
            alert('Something is wrong', err)
            console.log(err)
          }
        })
        .render(this.$refs.paypal);
    },

    order(){
       axios.post('order',this.products_with_form_data,{
            headers:{
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        }).then(res =>{
         if(res.data.massage){
           localStorage.removeItem('cart');
         }
       })
    }
  },

};
</script>
