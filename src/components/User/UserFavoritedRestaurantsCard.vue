<template>
  <div class="card">
    <div class="card-header">
      <strong>{{Favorites.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <a href="/restaurants/81" v-for="Favorite in Favorites" :key="Favorite.id">
        <img :src="Favorite.image" width="60" height="60" class="avatar mr-2 p-1" />
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
        Favorites: this.initProfile.Favorites
      }
    }
  }
</script>