<template>
    <div class="pos_products">

    </div>
</template>

<script>

export default {
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
