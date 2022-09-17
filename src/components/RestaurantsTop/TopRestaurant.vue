<template>
  <div class="container py-5">
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            
            <router-link :to="{name: 'restaurant', params:{id: restaurant.id}}" class="btn btn-primary mr-2">
              Show
            </router-link>

            <button
              v-if="restaurant.isLike"
              @click.prevent.stop="deleteLike"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.prevent.stop="addLike"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      initRestaurant: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        restaurant: this.initRestaurant
      }
    },
    methods: {
      addLike(){
        this.restaurant = {
          ...this.restaurant,
          isLike: true
        }
      },
      deleteLike(){
        this.restaurant = {
          ...this.restaurant,
          isLike: false
        }
      }
    }
  }
</script>