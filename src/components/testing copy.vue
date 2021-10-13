<template>
<div class="flex justify-bewteen items-center">
    {{window}} hh
</div>
</template>

<script>

export default ({
        data() {
        return {
            window: {
            width: 0,
            height: 0
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
