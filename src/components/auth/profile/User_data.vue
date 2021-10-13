<template>
    <div class="">
        <h2>Name : {{AuthUser.name | strToUpper}}</h2>
        <h2>Email : {{AuthUser.email}}</h2>
    </div>
</template>

<script>
   export default {

        data() {
            return {
                user:{}
            }
        },
    }
</script>


<style scoped>

</style>



