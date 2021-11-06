<template>
    <div class="lg:flex justify-center">
        <div class="py-6 px-8 bg-white rounded shadow-xl text-left border-l-8 border-green-600 lg:w-2/6">
            <h1 class="text-lg pl-2 text-gray-800 font-bold border-l-8 border-green-600">Password Reset</h1>
            <div v-if="errors" class="error">
                <p>{{errors}}</p>
            </div>
            <form @submit.prevent="reset">

                <div class="mb-6  mt-5">
                    <label class="block text-gray-800">Enter your email</label>
                    <input type="email" v-model="form.email" id="email" placeholder="email"
                        class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        required />
                    <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>

                </div>

                <div v-if="isvalidate" class="comfirm">
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Password</label>
                        <input type="password" v-model="form.password" id="email" placeholder="password"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            required />
                        <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold">Confirmation Password</label>
                        <input type="password" v-model="form.password_confirmation" id="email" placeholder="confirmation password"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
                    </div>
                </div>

                <button type="submit"
                    class="cursor-pointer py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     metaInfo: {
        title: 'Password reset',
        },
    data(){
        return{
            errors: '',
            success: '',
            isvalidate: false,
            form:{
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
        },
    methods:{
         reset(){
            axios.post('reset-password',this.form).then(response =>{
           
             const massage = response.data.massage;

             if(massage == 'validEmail'){
                  this.isvalidate = true
                  this.errors = ''
             }

            if(massage == 'sucess'){
                
                this.$store.commit('SET_TOAST', 'success')
                this.$store.commit('SET_TOAST_MASSAGE', 'Password Updated :)')
                this.$router.push({name:'Login'})
                setTimeout(() => {
                this.$store.commit('SET_TOAST', false);
                }, 2000);
                }

             if(response.data.error){
                 this.errors = response.data.error
             }

            })
            .catch(() => {this.errors = 'Confirmation Password Incorrect!'});
        },

    },

}
</script>
