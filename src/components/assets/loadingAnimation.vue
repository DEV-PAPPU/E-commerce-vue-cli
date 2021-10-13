<template>
<!-- Eta TailwindCss Diye Kora -->
    <div class="content-info ml-6 mr-6 w-full">
        <div class="hidden lg:block">
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
        <div class="lg:mt-4 mb-4">
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
        <div>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
            <p class="mt-2 w-full h-2 lg:h-3"><p/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.content-info p {
  animation: pulse-bg 1s infinite;
}

.content-info p {
  border-radius: 50px;
}
@keyframes pulse-bg {
  0% {
    background-color: #40e456;
  }
  50% {
    background-color: #1f882d
  }
  100% {
    background-color: #10851f
  }
}
</style>
