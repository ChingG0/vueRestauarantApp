<template>
  <div class="card">
    <div class="card-header">
      <strong>{{Followers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <a href="/users/51" v-for="Follower in Followers" :key="Follower.id">
        <img :src="Follower.image" width="60" height="60" class="avatar" />
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
        Followers: this.initProfile.Followers,
      }
    }
  }
</script>