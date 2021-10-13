<template>
  <div class="about">
    <h1>This is an about page {{text}}</h1>
    <div class="parent flex items-center p-20">
      <div>
           <button @click="inactivePeople()" class="bg-gray-200 rounded py-2 px-6 mx-5 text-black ">change</button>
      </div>
      <div>
           <div class="boxs flex gab-10">
              <!-- <h1 :class="{red: isActive}">conrent</h1> -->
              <div @click="set_color('blue')" class="box border-2 border-color-blue-500 p-5 bg-blue-600"></div>

              <div @click="set_color('red')" class="box border-2 border-color-blue-500 p-5 bg-red-600"></div>

              <div @click="set_color('green')" class="box border-2 border-color-blue-500 p-5 bg-green-600"></div>


              <div v-for="person in activePeople" :key="person.name">
                    {{ person.name }} : {{ person.email }}  
              </div>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios';

  export default {
    name: 'Home',
    data: () => ({
      text: 'hello',
      product:{},
      isActive:false,
      people: [
                { name: 'Mike Taylor', email: 'mike@example.com', isActive: true},
                { name: 'John Carson', email: 'john@example.com', isActive: false},
                { name: 'Peter Sanders', email: 'peter@exemple.com', isActive: true}
            ],

    }),

    methods: {

         set_color(color){
           alert(color)
          //  this.isActive = true
         }
         
    },

    computed: {

      activePeople() {
            return this.people.filter((person) => person.isActive)
        },

      inactivePeople() {
            return alert('okay');
        },

    },

    mounted(){
      axios.get(`shop`).then(response => {
            this.product = response.data;
            console.log(response)
        });
    }

  }
</script>

<style scoped>
.red{
  background: red;
}
</style>