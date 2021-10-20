<template>
    <div>

        <transition name="fade">
            <div v-if="Toast == 'success'"
                class="flex items-center mt-3 custom-tost absolute right-20 right-10 z-40 bg-white shadow-2xl gap-5 border-l-8 border-green-600">

                <div class="image">
                    <img src="../assets/../assets/../../assets/images/success.png" alt="" srcset="" style="width:40px">
                </div>
                <div>
                    <h5 class="font-semibold">{{ToastMassage}}</h5>
                </div>

                <div class="icon" @click="CloseToast()">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                            class="text-red-500 hover:text-red-300 bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </transition>


        <transition name="slide-fade">
                   <div v-if="Toast == 'error'"
            class="flex items-center mt-3 custom-tost absolute right-20 right-10 z-40 bg-white shadow-2xl gap-5 border-l-8 border-red-600">

            <div class="image">
                <img src="../assets/../assets/../../assets/images/error.png" alt="" srcset="" style="width:40px">
            </div>
            <div>
                <h5 class="font-semibold">{{ToastMassage}}</h5>
            </div>

            <div class="icon" @click="CloseToast()">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="text-red-500 hover:text-red-300 bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                </a>
            </div>
        </div>

        </transition>



    </div>
</template>

<script>
export default {

    methods:{
        CloseToast(){
            this.$store.commit('SET_TOAST', false);
        }
    },

    computed:{
        Toast(){
            return this.$store.getters.Get_TOAST;
           },

        ToastMassage(){
            return this.$store.getters.Get_TOAST_MASSAGE;
           },
    }

}
</script>

<style scoped>
.custom-tost{
    padding: 15px 30px;
    border-radius: 5px;
}

.custom-tost{
    transition: 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
