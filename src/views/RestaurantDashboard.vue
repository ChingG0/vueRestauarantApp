<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <hr>
      <ul>
        <li>評論數： {{ restaurant.commentsLength }}</li>
        <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
      </ul>
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
    </template>
  </div>
</template>
<script>
import Spinner from '../components/Spinner.vue'
const dummyData = {
    restaurant: {
        "id": 1,
        "name": "Louie Kunze",
        "tel": "1-188-499-8185",
        "address": "6875 Brekke Brook",
        "opening_hours": "08:00",
        "description": "Qui minus quis dolore alias et. Dolor ut et.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.923558837625905",
        "viewCounts": 2,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-16T15:29:42.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Sint et temporibus.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-15T16:02:37.000Z",
                    "updatedAt": "2022-09-15T16:02:37.000Z"
                }
            },
            {
                "id": 51,
                "text": "Dicta dignissimos quidem ut et.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-09-15T16:02:37.000Z",
                    "updatedAt": "2022-09-15T16:02:37.000Z"
                }
            },
            {
                "id": 101,
                "text": "Dignissimos blanditiis sapiente autem soluta commodi laudantium delectus.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-15T16:02:37.000Z",
                    "updatedAt": "2022-09-15T16:02:37.000Z"
                }
            }
        ]
    }
}
export default {
  name: 'RestaurantDashboard',
  components: {
    Spinner
  },
  data(){
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      },
      isLoading: true
    }
  },
  created(){
    this.fetchRestaurant()
  },
  methods: {
    async fetchRestaurant(){
        const {id, name, Category, Comments, viewCounts} = await dummyData.restaurant
        try{
          this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name:'未分類',
          commentsLength: Comments.length,
          viewCounts
        }
        this.isLoading = false
        }catch(err){
          console.log(err)
          this.isLoading = true
        }

      }
    }
}
</script>