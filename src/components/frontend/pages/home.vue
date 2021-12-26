<template>
    <div>
        <!-- Start hero section-->
        <div class="lg:mx-20 mx-5 mt-28 lg:flex gap-10">

            <div class="slider w-3/12">
                <SideBar/>
            </div>
             <div class="lg:w-9/12">
                 <Homeslider/>
             </div>
        </div>

        <!-- End hero section--->

        <!-- Categorie Lists -->

        <div class="lg:mt-5 lg:mx-20 mx-5">

        <div class="category">
                <div
                class="grid lg:grid-cols-8 md:grid-cols-3 grid-cols-2 gap-5">
                <div v-for="category in categories" :key="category.id" class="card">
                   
                    <div class="mb-2">
                        <div
                            class="border-2 border-gray-200 border-opacity-60 rounded-md bg-white  shadow-sm hover:shadow-sm">

                             <template v-if="Loading">
                                <default-image/>
                             </template>

                            <img v-else :src="url+category.image" class="category-image">
                            <div class="p-3">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                                </h2>

                                <router-link :to="{name: 'Category-products', params: {slug: category.slug}}"
                                    class="text-center text-md font-medium  block mb-1">{{category.name}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div
            class="product mb-24 border-b-2 border-gray-200 my-20 items-center">

            <div class="service-info-heading container-box text-center">
                <h1 class="heading before-after lg:text-3xl text-2xl">🔥🔥 Tranding Products 🔥🔥</h1>
            </div>
               <div class="tab">
                 <ProductTab/>
               </div>
        </div>
        </div>

        <!-- End service about--->
    </div>
</template>

<script>
import axios from 'axios'
import Homeslider from '../components/home_slider/Home_slider'
import ProductTab from '../components/home_slider/producttab'
import SideBar from '../components/home/Sidebar.vue'
    export default {
    components:{Homeslider,ProductTab, SideBar},
        metaInfo: {
        title: 'Home Page',
        },
        data() {
            return {
                products:'',
                fakeproducts:{},
                latest_products:{},
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
            // this.$store.commit('SET_TOAST', 'success')
            // this.$store.commit('SET_TOAST_MASSAGE', 'Product added')
            // setTimeout(() => {
            //     this.$store.commit('SET_TOAST', false);
            //     }, 2000);

            this.$toast.success({
                    title:'Success!',
                    message:'Product added.'
                })
        },



       },

        mounted() {

            axios.get('shop').then(response=>{
                  this.products = response.data
            }),

            this.loadproduct();

             axios.get('category').then(response=>{
                  this.categories = response.data
            })

             axios.get('latest-products').then(res=>{
                  this.latest_products = res.data
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

img.category-image {
    width: 100%;
    height: 90px;
    object-fit: cover;
}

.slider{

}

</style>
