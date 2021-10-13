<template>
    <div>
        <!-- Start hero section-->

        <div id="home" class="hero-section shadow-lg">

             <Homeslider/>

        </div>

        <!-- End hero section--->


        <!-- Categorie Lists -->

        <div class="category mt-32">

                      <div class="service-info-heading container-box text-center">
                <h1 class="heading before-after text-3xl">🔥🔥 Best Product Categories🔥🔥</h1>
            </div>

                <div v-if="categories.length"
                class="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 gap-5 shop my-10 py-10 ">
                <div v-for="category in categories" :key="category.id" class="">
                    <div class="mb-2">
                        <div
                            class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm">

                            <img :src="url+category.image" class="category-image">
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                                </h2>

                                <router-link :to="{name: 'Category-products', params: {slug: category.slug}}"
                                    class="bg-green-600 text-white py-2 px-5 text-sm font-medium  block mb-1">{{category.name}} -></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div
            class="product mb-24 border-b-2 border-gray-200 my-20 items-center">

            <div class="service-info-heading container-box text-center">
                <h1 class="heading before-after text-3xl">🔥🔥 Best Tranding Products 🔥🔥</h1>
            </div>


            <div v-if="products.length"
                class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10 shop my-10 py-10">
                <div v-for="product in products" :key="product.id" class="">
                    <div class="mb-2">
                        <div
                            class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm">

                            <img :src="url+product.image" class="product-image">
                            <div class="p-6">
                               
                                <h1 class="title-font text-lg font-medium text-gray-900 mt-2 mb-4">🔥 {{product.title}} 🔥</h1>
                                 

                                 <div class="flex items-center">
                                      <router-link :to="{name: 'Product-Single', params: {slug: product.slug}}"
                                    class="text-white inline-block rounded mr-3 bg-green-600 hover:bg-green-700 py-3 px-10">View Product</router-link>

                                    <button @click="addTocart(product)" class="rounded bg-green-600 text-2xl text-white hover:bg-green-700 py-2 px-3">
                                        <i class="las la-cart-plus"></i>
                                    </button>

                                 </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Categorie Lists -->

        <!-- End service about--->
    </div>
</template>

<script>
import axios from 'axios'
import Homeslider from '../components/home_slider/Home_slider.vue'
    export default {
    components:{Homeslider},
        metaInfo: {
        title: 'Home Page',
        },
        data() {
            return {
                products:'',
                product:'',
                categories:{},
               cart_item: {
                    quantity: '',
                    product_id:'',
                    product_title:'',
                    product_image:'',
                    price:'',
               },
            }
            
        },

        methods:{

         loadproduct(){
             axios.get('public/product').then(response=>{
                  this.product = response.data
            })
         },
         
        addTocart(product) {

            // let products = [];
            
            // if(localStorage.getItem('products')){
            //     products = JSON.parse(localStorage.getItem('products'));
            // }

            // let items = products.find(item => item.product_id === product.id);
            
            // if (items) {
            //     items.quantity++
            // }
            // else{

            //      products.push({
            //      product_id : product.id, 
            //      image : product.image,
            //      price: product.price,
            //     quantity: 1
            // });

            // }

            // localStorage.setItem('products', JSON.stringify(products));

            this.$store.commit('ADD_TO_CART', product);
            this.$store.commit('SET_TOAST', 'success')
            this.$store.commit('SET_TOAST_MASSAGE', 'Product added')
            setTimeout(() => {
                this.$store.commit('SET_TOAST', false);
                }, 2000);
        },



       },

        mounted() {

            axios.get('shop').then(response=>{
                  this.products = response.data
            }),

            this.loadproduct();

             axios.get('public/category').then(response=>{
                  this.categories = response.data
            })
            

        }


    }
</script>


<style scoped>

@import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');

.hero-section{
    /* background: url('../../../assets/images/hero.jpg'); */
    /* background: rgb(46,150,105);
background: linear-gradient(114deg, rgba(46,150,105,1) 0%, rgba(170,212,199,1) 100%); */
}

nav > .nav.nav-tabs{

  border: none;
    color:#fff;
    background:#272e38;
    border-radius:0;

}
nav > div a.nav-item.nav-link,
nav > div a.nav-item.nav-link.active
{
  border: none;
    padding: 18px 25px;
    color:#fff;
    background:#272e38;
    border-radius:0;
}

nav > div a.nav-item.nav-link.active:after
 {
  content: "";
  position: relative;
  bottom: -60px;
  left: -10%;
  border: 15px solid transparent;
  border-top-color: #e74c3c ;
}
.tab-content{
  background: #fdfdfd;
    line-height: 25px;
    border: 1px solid #ddd;
    border-top:5px solid #e74c3c;
    border-bottom:5px solid #e74c3c;
    padding:30px 25px;
}

nav > div a.nav-item.nav-link:hover,
nav > div a.nav-item.nav-link:focus
{
  border: none;
    background: #e74c3c;
    color:#fff;
    border-radius:0;
    transition:background 0.20s linear;
}


.router{
    padding: 0px !important;
}

</style>
