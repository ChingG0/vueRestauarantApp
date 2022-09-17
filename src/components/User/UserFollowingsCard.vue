<template>
  <div class="card">
    <div class="card-header">
      <strong>{{Followings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <a href="/users/51" v-for="Follow in Followings" :key="Follow.id">
        <img :src="Follow.image" width="60" height="60" class="avatar mr-2" />
      </a>
    </div>
    
  </div>
</template>
<script>
  export default{
    props: {
      initProfile: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        Followings: this.initProfile.Followings,
      }
    }
  }
</script>