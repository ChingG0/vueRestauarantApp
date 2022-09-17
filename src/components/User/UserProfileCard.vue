<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">
            {{profile.email}}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{profile.commentsLength}}</strong> 已評論餐廳</li>
            <li><strong>{{profile.FavoritedRestaurantsLength}}</strong> 收藏的餐廳</li>
            <li><strong>{{profile.FollowingsLength}}</strong> followings (追蹤者)</li>
            <li><strong>{{profile.FollowersLength}}</strong> followers (追隨者)</li>
          </ul>
          <p>
            <router-link :to="{name: 'editprofile'}">
              <button v-if="currentUser.isAdmin" type="submit" class="btn btn-primary">
                edit
              </button>
              <button v-else-if="Followed" @click.prevent.stop="deleteFollow" type="submit" class="btn btn-primary">
                unFollow
              </button>
              <button v-else-if="!Followed" @click.prevent.stop="addFollow" type="submit" class="btn btn-primary">
                Follow
              </button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "isAdmin": true
  },
  isAuthenticated: true
}
export default {
  props: {
    initProfile: {
      type: Object,
      required: true
    },
    isFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      profile: this.initProfile,
      currentUser: dummyUser.currentUser,
      Followed: this.isFollowed
    }
  },
  methods: {
    addFollow() {
      this.Followed = true
    },
    deleteFollow() {
      this.Followed = false
    }
  }
}
</script>
