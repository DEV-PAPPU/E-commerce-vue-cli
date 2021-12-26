<template>
    <div>
        <div class="content  sidebar bg-white">
            <div class="header bg-green-600 px-8 text-white py-3 ">
                <h6 class="text-lg font-medium">All categories</h6>
            </div>

            <div class="mt-3 px-5">
                <div v-for="category in categories" :key="category.id">
                    <h2 class="py-2 mb-2 px-4 rounded bg-gray-100">{{category.name}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                categories:'',

            }
            
        },

        mounted() {

            axios.get('category').then(response=>{
                  this.categories = response.data
            })
        }

    }
</script>


<style scoped>
.sidebar{
    height: 450px;
}
</style>
