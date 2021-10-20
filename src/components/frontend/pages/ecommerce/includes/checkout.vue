<template>
    <div class="mt-3 text-left">
        <form >
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mx-12 gap-10">
                <div class="py-12">
                    <div class="bg-white shadow-lg rounded-lg">
                        <div class="md:flex ">
                            <div class="w-full p-4 px-5 py-5">
                                <div class="flex flex-row">
                                    <h2 class="text-3xl font-semibold">Checkout</h2>
                                    <h2 class="text-3xl text-green-400 font-semibold">Greens</h2>
                                </div>
                                <div class="flex flex-row pt-2 text-xs pb-2"> <span
                                        class="text-gray-400">Information</span> <small
                                        class="text-gray-400 ml-1">></small>
                                    <span class="font-bold ml-1">Shopping</span> <small
                                        class="text-gray-400 ml-1">></small> <span
                                        class="text-gray-400 ml-1">Payment</span>
                                </div> <span>Customer Information</span>

                                <div class="relative pb-5"> <input type="text" v-model="form.email"
                                        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        :placeholder="AuthUser.email" readonly>
                                </div> <span>Shipping Address</span>
                                <div class="grid md:grid-cols-2 md:gap-2"> <input type="text" v-model="form.first_name"
                                        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        :placeholder="AuthUser.name" readonly>

                                    <div class="number">
                                        <input type="text" v-model="form.phone"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Phone Number*">
                                        <small v-if="errors.phone"
                                            class="form-text text-danger">{{errors.phone[0]}}</small>
                                    </div>


                                </div>
                                <small v-if="errors.address" class="form-text text-danger">{{errors.address[0]}}</small>
                                <input type="text" v-model="form.address" name="address"
                                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                    placeholder="Address*">

                                <div class="grid md:grid-cols-3 md:gap-2">

                                    <div class="form-group">
                                        <input type="text" v-model="form.zipcode"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Zipcode*">
                                        <small v-if="errors.zipcode"
                                            class="form-text text-danger">{{errors.zipcode[0]}}</small>
                                    </div>

                                    <div class="form-group">
                                        <input type="text" v-model="form.state"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="state*">
                                        <small v-if="errors.state"
                                            class="form-text text-danger">{{errors.state[0]}}</small>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" v-model="form.city"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="city">
                                        <small v-if="errors.city"
                                            class="form-text text-danger">{{errors.city[0]}}</small>

                                    </div>
                                </div>

                                <div class="form-group">

                                        <input type="text" v-model="form.country"
                                            class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Country*">
                                        <small v-if="errors.country"
                                            class="form-text text-danger">{{errors.country[0]}}</small>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="cart-content mt-12">
                    <!-- Loading Amimation -->
                    <template v-if="Loading">
                        <content-loading />
                    </template>
                    <!-- Content -->
                    <div v-else class="content px-5 py-12 bg-white shadow-lg rounded-lg">

                        <div class="pb-3 coupon-checkbox" id="coupon-div">
                              <button @click.prevent="CouponApply()" class="h-6 mt-4 px-3 rounded font-medium text-sm bg-blue-500 text-white">Have Any Coupon?</button>

                            <div v-if="isCoupon" class="coupon mt-3 my-2 flex items-center mr-5">
                                    <input type="text" v-model="couponForm.coupon_code" class="p-2 border border-gray-300 text-sm"
                                    placeholder="coupon code">

                                    <button type="submit" @click.prevent="Coupon()"
                            class="ml-5 px-10 h-9 rounded font-medium text-xs bg-blue-500 text-white">Apply</button>
                            </div>
                        </div>

                        <ul v-for="cart in form.products" :key="cart.product_id">
                            <li class="border-b border-gray-200 pb-1">{{ cart.name }} $
                                {{ cart.quantity * cart.price }}</li>
                        </ul>
                        <div class="total mt-3">
                            <p>Subtotal : $ {{product_subtotal}}</p>

                            <div v-if="coupon_data" class="coupon-discount mt-3">

                              <p class="my-2">You Get ${{coupon_data.coupon_amount}} Discout</p>

                              <p>Discout subtotal : $ {{form.discount_price}}</p>
                            </div>
                        </div>

                        <div class="form-group mt-10">
                            <label for="payment_method">Payment Method</label>
                            <select v-model="form.payment_method" id="payment_method" class="mt-3 w-full p-2 border border-gray-300 ">
                                <option value="" style="display: none" selected>Select Payment Method</option>
                                <option value="cod" selected>Cash on Delivery (COD)
                                </option>
                                <option value="paypal" selected>Paypal
                                </option>
                            </select>
                            <small v-if="errors.payment_method"
                                class="form-text text-danger">{{errors.payment_method[0]}}</small>

                                <div v-if="form.payment_method == 'paypal'" class="paypal-getway">
                                   <h1>paypal </h1>
                                   <Paypal/>
                                </div>
                                <Paypal/>

                        </div>

                        <button type="submit" @click.prevent="order()"
                            class="h-12 mt-4 w-48 rounded font-medium text-xs bg-blue-500 text-white">Place
                            Order</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Paypal from '../../paypal/form.vue'
export default {
    components:[Paypal],
     metaInfo: {
        title: 'checkout Page',
        },
    data(){
       return{
           form:{
               email: 'pappu@gmail.com',
               first_name: 'pappu',
            //    last_name: '',
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
           errors:'',
           couponForm:{
               coupon_code: ''
           },
           coupon_data:'',
           isCoupon:false,
           shoppingcart:{},
           subtotal:'',
           discount_amount:'',
       }
    },

    methods: {

        order() {

                this.form.subtotal = this.product_subtotal

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

              CouponApply(){
               this.isCoupon = true
              },

              Coupon(){

                axios.post('coupon/apply', this.couponForm,{
                headers:{
                    authorization: 'Bearer' + localStorage.getItem('token')
                }
                })
                .then(res => {
                       
                        const coupon = this.coupon_data = res.data.coupon;
                        const massage = res.data.massage;
                        const discount_amount = res.data.coupon.coupon_amount;
                       
                       if(coupon.coupon_type === 'fixed'){
                            this.form.discount_price = this.product_subtotal -  discount_amount;
                            alert(massage);
                       }

                       if(coupon.coupon_type === 'percentage'){
                        //    const cal = this.product_subtotal  + discount_amount

                           alert('Working on it percentage', )
                       }
                       
                        if(res.data.coupon){
                           this.isCoupon = false
                            document.getElementById("coupon-div").style.display = "none";
                        }
                        else{
                            this.$store.commit('SET_TOAST', 'error')
                            this.$store.commit('SET_TOAST_MASSAGE', massage)
                            setTimeout(() => {
                                this.$store.commit('SET_TOAST', false);
                                }, 3000);
                            }
                    })
              },

        },



        computed:{

            auth(){
                return this.$store.getters.getUser;
            },
            
            set_authuser_email(){
                return this.$store.getters.getUser;
            },

            product_subtotal(){
                return this.form.products.reduce((a,b) => a+ (b.price * b.quantity), 0);
            }
        },

       mounted(){
           axios.get('/api/cartsitem').then(res =>{
                this.shoppingcart = res.data.carts
                this.subtotal = res.data.total
            });

            this.form.products = JSON.parse(localStorage.getItem('cart'));
       }

}
</script>


