<template>
    <div class="flex justify-bewteen items-center rounded">
        <hooper :settings="hooperSettings" style="height:450px;" class="slider-item">
            <slide v-for="slider in sliders" :key="slider.id">
                <div class="slider-section border-b-2 border-gray-200 ">
                    <img :src="url+slider.slider" alt="" style="width:100%" class="slider-img w-full">
                </div>
            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import axios from 'axios';
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
            sliders:{},
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
    },

   mounted() {
       axios.get('sliders').then( res =>{
            console.log(res)
            this.sliders = res.data
        })
  },
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
    widows: 100%;
}

@media screen and (max-width: 768px){
.slider-item{
    height: 240px;
}
}

.slider-img{
    width: 1200px !important;
    height: 450px;
    object-fit: cover;
}

</style>
