<template>
  <div class="container">
    <form action="/users/2?_method=PUT" method="POST" enctype="multipart/form-data" @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Name" value="user">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="profile.image" :src="profile.image" class="d-block img-thumbnail mb-3" width="200" height="200" />
        <input type="file" class="form-control-file" id="image" accept="image/*" name="image"
          @change="handleFileChange">
      </div>
        <button type="submit" class="btn btn-primary mr-5">Submit</button>
        <button type="button" class="btn btn-secondary" @click="$router.back()">回上一頁</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'EditProfile',
  data() {
    return {
      profile: {
        name: '',
        image: ''
      }

    }
  },
  methods: {
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.profile.image = ''
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.profile.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-profile-submit', formData)
    }
  }
}
</script>
