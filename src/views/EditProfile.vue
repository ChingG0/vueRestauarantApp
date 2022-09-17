<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <form action="/users/2?_method=PUT" method="POST" enctype="multipart/form-data" @submit.stop.prevent="handleSubmit()">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" id="name" placeholder="Enter Name" value="user">
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" class="form-control-file" id="image" name="image">
          </div>
          <button type="submit" class="btn btn-primary" @click="$router.back()">Submit</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  export default{
    methods: {
      handleSubmit(){
        
      }
    }
  }
</script>

