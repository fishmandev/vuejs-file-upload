<template>
    <div class="image-uploader">
        <h1>Image Uploader</h1>
        <form @submit.prevent="upload">
            <input type="file" @change="fileChange" accept="image/*">
            <button type="submit">Upload</button>
        </form>
    </div>
</template>

<script>
    export default {
      name: 'image-uploader',
      data () {
        return {
          image: {
            name: '',
            size: 0,
            data: ''
          }
        }
      },
      methods: {
        fileChange (e) {
          var fileReader = new FileReader()
          fileReader.readAsDataURL(e.target.files[0])
          fileReader.onload = (filereader) => {
            this.image.name = e.target.files[0].name
            this.image.size = e.target.files[0].size
            this.image.data = filereader.target.result
          }
        },
        upload () {
          // TODO Send 'this.image' to backend server
        }
      }
    }
</script>
