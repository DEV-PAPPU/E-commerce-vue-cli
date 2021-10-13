<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="flex flex-col">
        <!-- Loading Amimation -->
        <!-- <template v-if="Loading">
            <content-loading />
        </template> -->
        <!-- Content -->
        <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div v-if="cart" class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                                    Subtotal
                                </th>

                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 text-left">
                            <tr v-for="cart in cart" :key="cart.id">
                                <td class="py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ cart.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    $ {{cart.price }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-md text-left font-semibold flex items-center gap-3">
                                        <div @click="QuantityDecremant(cart.product_id)">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor"
                                                    class="text-red-500 hover:text-red-300 bi bi-dash-circle"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>{{ cart.quantity }} </div>
                                        <div @click="QuantityIncremant(cart.product_id)">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor"
                                                    class="text-blue-500 hover:text-blue-300 bi bi-plus-circle"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    $ {{ cart.quantity * cart.price }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <a @click.prevent="deletecart(cart.product_id)" href="#" class="btn btn-danger btn-sm"> <i
                                            class="lar la-minus-square icon"></i>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot class="mx-10">
                            <tr>
                                <td class="p-3 text-left">
                                    <strong>Subtotal
                                        $ {{total}}
                                    </strong>

                                </td>
                                <td colspan="2" class="hidden-xs"></td>
                                <td colspan="1" class="hidden-xs"></td>
                                <td class="pr-10">
                                    <router-link :to="{name: 'Checkout'}" v-if="Authenticated"
                                        class="btn btn-success btn-block"> Checkout <i class="fa fa-angle-right"></i>
                                    </router-link>

                                    <router-link :to="{name: 'Login'}" v-else class="btn btn-success btn-block">
                                        Checkout <i class="fa fa-angle-right"></i></router-link>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>

             <div v-else>
                     No Product In Your Cart!
             </div>
        </div>
    </div>
</template>


<script>
export default {
     metaInfo: {
        title: 'Cart Page',
        },

    data() {
        return {
            cart: [],
            isCart: false,
            isActive: false,
        }
    },
    methods: {


        //Deleting product from cart
        deletecart(id){
            let storageProducts = JSON.parse(localStorage.getItem('cart'));
            let products = storageProducts.filter(product => product.product_id !== id );
            localStorage.setItem('cart', JSON.stringify(products));
            this.loadCart();
            this.$store.commit('SET_TOAST', 'success')
            this.$store.commit('SET_TOAST_MASSAGE', 'Product Removed')
            setTimeout(() => {
                this.$store.commit('SET_TOAST', false);
                }, 2000);
        },


        loadCart(){
            this.cart = JSON.parse(localStorage.getItem('cart'))
        },

        QuantityIncremant(id){
         
        let cart = [];
            
          if(localStorage.getItem('cart')){
              cart = JSON.parse(localStorage.getItem('cart'));
          }

          let items = cart.find(item => item.product_id === id);
         
         if (items) {
              items.quantity++
          }

        localStorage.setItem('cart', JSON.stringify(cart));

         this.loadCart()

        },
        QuantityDecremant(id){

            let cart = [];
            
          if(localStorage.getItem('cart')){
              cart = JSON.parse(localStorage.getItem('cart'));
          }

          let items = cart.find(item => item.product_id === id);
         
         if (items) {
              if(items.quantity == 1){
                 alert('Please keep minimun 1 quantity')
              }else{
                  items.quantity--
              }
          }
          
        localStorage.setItem('cart', JSON.stringify(cart));

         this.loadCart()

        },
    },
        computed: {
         total(){
            return this.cart.reduce((a,b) => a+ (b.price * b.quantity), 0)
           },
       },

       mounted(){
        this.loadCart();
       }

}
</script>


<style scoped>

.customcolor{
    background: brown;
}

.cart-image{
display: block;
  /* margin-left: auto; */
  margin-right: auto;
}



body {
    background-color: #eee;
    font-family: 'Calibri', sans-serif !important
}

.mt-100 {
    margin-top: 100px
}

.card {
    margin-bottom: 30px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05);
    box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05)
}

.card .card-header {
    background-color: #fff;
    border-bottom: none;
    padding: 24px;
    border-bottom: 1px solid #f6f7fb;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}

.card .card-body {
    padding: 30px;
    background-color: transparent
}

.btn-primary,
.btn-primary.disabled,
.btn-primary:disabled {
    background-color: #4466f2 !important;
    border-color: #4466f2 !important
}

.btn-primary{
padding: 10px 35px !important;
}

.product-title{
    font-size: 23px;
    font-weight: 800;
}


.product-single {
    justify-content: center !important;
    align-items: center;
}

.text-padding{
    padding: 10px;
font-size: 18px;
font-weight: 500;
}
.quantity{
    width: 48px;
    padding: 2px 8px;
}


.quantity {
    width: 120px;
    background: #f0f0f0;
    padding: 6px 11px 6px 14px;
    border-radius: 0;
    margin-right: 10px;
    align-items: center;
    margin-top: 11px;
}
.quantity-text{
    font-weight: 100 !important;
}
</style>
