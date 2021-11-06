<template>
    <div class="flex justify-bewteen items-center rounded">
        <hooper :settings="hooperSettings" class="slider-item">
            <slide>
                <div class="slider-section border-b-2 border-gray-200 ">

                       <img src="../../../../assets/images/ohero.jpg" alt="" class="w-full">

                    <div class="slider-content">

                        <div class="hero-section-left lg:py-10 text-gray-600 md:my-5 text-left" data-aos="zoom-in">
                            <h1 class="lg:text-5xl text-2xl">Ecommerce Online Store</h1>
                            
                            <div class="text-xl mt-10 items-center mt-8">
                                <h1 class="heading mr-4"><span class="type">🔥 70% Discount! 🔥</span></h1>
                            </div>
                            <button id="service"
                                class="mt-10 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">SHOP
                                NOW</button>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <div class="slider-section border-b-2 border-gray-200">

                       <img src="../../../../assets/images/ohero.jpg" alt="" class="w-full">

                    <div class="slider-content">

                        <div class="hero-section-left lg:py-10 text-gray-600 md:my-5 text-left" data-aos="zoom-in">
                            <h1 class="lg:text-5xl text-2xl">Ecommerce Online Store</h1>
                            
                            <div class="text-xl mt-10 items-center mt-8">
                                <h1 class="heading mr-4"><span class="type">🔥 70% Discount! 🔥</span></h1>
                            </div>
                            <button id="service"
                                class="mt-10 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">SHOP
                                NOW</button>
                        </div>
                    </div>
                </div>
            </slide>


            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide,
  Pagination as HooperPagination,
   } from 'hooper';

import 'hooper/dist/hooper.css';
export default ({
    components: {
      Hooper,
      Slide,
    HooperPagination,
      
    },
        data() {
        return {
            hooperSettings: {
             itemsToShow: 1,
             centerMode: true,
             autoPlay: true,
            hoverPause: true,
            transition: 600,
           }
        }
      },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
})
</script>

<style scoped>
.slider-section{
    position: relative;
}

.slider-content{
  position: absolute;
  top: 30px;
  left: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.slider-item{
    height: 400px;
}

@media screen and (max-width: 768px){
.slider-item{
    height: 240px;
}
}

</style>
