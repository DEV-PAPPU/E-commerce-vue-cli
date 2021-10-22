<template>
  <div class="mt-3 paypal-payment">
    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  props:['amount'],
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
                    value: this.amount
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
          },
          onError: err => {
            alert('Something is wrong', err)
            console.log(err)
          }
        })
        .render(this.$refs.paypal);
    }
  },

};
</script>
