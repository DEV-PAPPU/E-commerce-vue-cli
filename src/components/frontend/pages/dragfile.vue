<template>
    <div class="about">
        <div class="parent flex items-center justify-center p-20">
            <div>

                <div v-cloak @drop.prevent="addFile" @dragover.prevent class="bg-gray-200 p-10 rounded-lg border-dotted border-4    border-blue-500">
                    
                 <h2>Files to Upload (Drag them over)</h2>
                   
                    <ul v-if="files.length">
                        <li v-for="file in files" :key="file">
                            {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)"
                                title="Remove">X</button>
                        </li>
                    </ul>

                    <div v-else class="my-5 ml-10 flex items-center">
                       <img src="../../../assets/images/upload-icon.png" alt="" style="width:150px" srcset="">
                    </div>

                    <button :disabled="uploadDisabled" @click="upload" class="">Upload</button>
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
     files:[]
     
    }),

    methods: {


    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      ([...droppedFiles]).forEach(f => {
        this.files.push(f);
      });

      console.log(this.files)
    },
    removeFile(file){
      this.files = this.files.filter(f => {
        return f != file;
      });      
    },
    upload() {
      
      let formData = new FormData();
      this.files.forEach((f,x) => {
        formData.append('file'+(x+1), f);
      });

    }
         
    },

    computed: {

        uploadDisabled() {
      return this.files.length === 0;
    }

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