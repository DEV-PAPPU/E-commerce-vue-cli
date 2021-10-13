<template>
    <div class="flex justify-bewteen items-center">
        <hooper :settings="hooperSettings" style="height:500px">
            <slide>
                <div id="home" class="slider-section border-b-2 lg:py-8 border-gray-200 h-screen">

                       <img src="../assets/images/ohero.jpg" alt="">

                    <div class="slider-content section-padding flex gap-10">

                        <div class="hero-section-left lg:py-10 text-green-600 md:my-5 text-left w-3/5	" data-aos="zoom-in">
                            <h1 class="hero-heading text-5xl	">Best Ecommerce Online Store</h1>
                            <p class="mt-10 text-green-600 text-xl	">I'm working on web development since 2018 I have
                                done 200+projects. Like
                                e-commerce site small,large-business site portfolio website. And done several bug-fixing
                                projects using custom CSS, js and etc.
                            </p>
                            <div class="text-xl mt-10 items-center mt-8">
                                <h1 class="heading mr-4"><span class="type">🔥 70% Discount! 🔥</span></h1>
                            </div>
                            <button id="service"
                                class="mt-10 text-white  bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">SHOP
                                NOW</button>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <div id="home" class="slider-section border-b-2 lg:py-8 border-gray-200 h-screen">

                       <img src="../assets/images/ohero.jpg" alt="">

                    <div class="slider-content section-padding flex gap-10">

                        <div class="hero-section-left lg:py-10 text-green-600 md:my-5 text-left w-3/5	" data-aos="zoom-in">
                            <h1 class="hero-heading text-5xl	">Best Ecommerce Online Store</h1>
                            <p class="mt-10 text-green-600 text-xl	">I'm working on web development since 2018 I have
                                done 200+projects. Like
                                e-commerce site small,large-business site portfolio website. And done several bug-fixing
                                projects using custom CSS, js and etc.
                            </p>
                            <div class="text-xl mt-10 items-center mt-8">
                                <h1 class="heading mr-4"><span class="type">🔥 70% Discount! 🔥</span></h1>
                            </div>
                            <button id="service"
                                class="mt-10 text-white  bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-md">SHOP
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
  top: 0px;
  left: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
