<template>
    <div class="breadcrumb mb-16">
        <div class="flex gap-1 bg-green-600 px-5 py-3 rounded border-l-4 border-white">
           <p>Home-></p>
           <div class="item" v-for="item in breadcrumb" :key="item.name">
                  <p class="flex">{{item.name}}-></p>
           </div>
        </div>
    </div>
</template>

<script>
export default {
     props:['breadcrumb'],
      data() {
          return {
              publicPath: process.env.BASE_URL
          }
      },
}
</script>
