<template>
  <div class="card">
    <div class="card-header">
      <strong>{{Comments.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
        <a href="/restaurants/81" v-for="Comment in Comments" :key="Comment.id">
          <img :src="Comment.Restaurant.image" width="60" height="60" class="avatar p-1" />
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
        Comments: this.initProfile.Comments
      }
    }
  }
</script>