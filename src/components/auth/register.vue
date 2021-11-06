<template>
        <div class="lg:flex justify-center ">
            <div class="py-6 px-8 bg-white rounded lg:w-2/6 text-left border-l-8 border-green-600">
                <form @submit.prevent="rigister">
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Name</label>
                        <input type="text" v-model="form.name" placeholder="name"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>

                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Email</label>
                        <input type="email" v-model="form.email" id="email" placeholder="email"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>

                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Password</label>
                        <input type="password" v-model="form.password" id="email" placeholder="password"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>

                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Confirmation Password</label>
                        <input type="password" v-model="form.password_confirmation" id="email" placeholder="confirmation password"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
                    </div>

                    <button type="submit"
                        class="cursor-pointer py-2 px-4  mt-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded">Sign-Up
                        Now</button>
                </form>
            </div>
        </div>
</template>


<script>

 import axios from 'axios'

   export default {
        metaInfo: {
        title: 'Rigister Page',
        },

     data: () => ({
       errors:{},
       form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
      },

      }),
        methods: {
           rigister() {
                axios.post('auth/register',this.form).then(response => {
                   console.log(response)
                   this.$router.push({name:'Login'});
                 
                })
                .catch(e =>{
                    this.errors = e.response.data
                })
            },

        },
    }
</script>



