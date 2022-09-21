<template>
  <div class="container py-5">
    <NavTabs />

    <!-- Restaurants NavPills-->
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
    <RestaurantCard 
      v-for="restaurant in restaurants" 
      :key="restaurant.id"
      :init-restaurant = "restaurant"/>
       <!-- RestaurantsCard -->

    </div>
    <RestaurantsPagination 
      :current-page = "currentPage"
      :total-page = "totalPage"
      :previous-page = "previousPage"
      :next-page = "nextPage"
      :category-id = 'categoryId'/>
     <!-- Restaurants Pagination-->

  </div>
</template>

<script>
  import NavTabs from '../components/Restaurants/NavTabs.vue'
  import RestaurantCard from '../components/Restaurants/RestaurantCard.vue'
  import RestaurantsNavPills from '../components/Restaurants/RestaurantsNavPills.vue'
  import RestaurantsPagination from '../components/Restaurants/RestaurantsPagination.vue'
  /*eslint-disable */
  const dummyData = {
    restaurants: [
        {
            "id": 1,
            "name": "Louie Kunze",
            "tel": "1-188-499-8185",
            "address": "6875 Brekke Brook",
            "opening_hours": "08:00",
            "description": "Qui minus quis dolore alias et. Dolor ut et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.923558837625905",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Dahlia Ankunding",
            "tel": "052.465.8024",
            "address": "75167 Nichole Freeway",
            "opening_hours": "08:00",
            "description": "Et cumque doloremque dignissimos provident quis.\nE",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.43780352485172",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Korey Will",
            "tel": "975-772-7758",
            "address": "179 Hansen Roads",
            "opening_hours": "08:00",
            "description": "consequatur et corporis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.23545314339677",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Chandler O'Hara",
            "tel": "1-522-981-1260 x03892",
            "address": "09884 Considine Island",
            "opening_hours": "08:00",
            "description": "Aspernatur fuga rem consectetur tempore consequatu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.41272690573818",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Janick Gottlieb",
            "tel": "(906) 612-9105",
            "address": "49087 Henry Forges",
            "opening_hours": "08:00",
            "description": "Non reiciendis odit ullam voluptatibus est qui imp",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.93654185389855",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Ana Hane III",
            "tel": "(802) 367-9755",
            "address": "4194 Runolfsdottir Center",
            "opening_hours": "08:00",
            "description": "Dolor reprehenderit enim libero neque. Voluptas la",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.082407152851964",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Raquel Doyle",
            "tel": "(105) 753-6547",
            "address": "95707 Dwight Shore",
            "opening_hours": "08:00",
            "description": "omnis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.03043124527738",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Fidel Deckow",
            "tel": "020.179.8560 x86472",
            "address": "094 Eula Plaza",
            "opening_hours": "08:00",
            "description": "Nam dolor tempora deserunt. Animi commodi dolores ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.53900261141832",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Rafael Reinger",
            "tel": "311.549.8948",
            "address": "86884 Dorcas Extensions",
            "opening_hours": "08:00",
            "description": "Fugit debitis non itaque reiciendis velit nihil se",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.59790276399855",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Benedict Reilly",
            "tel": "156-581-9459 x65546",
            "address": "85726 Hand Stravenue",
            "opening_hours": "08:00",
            "description": "rerum voluptas veritatis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.711995305218696",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-15T16:02:37.000Z",
                "updatedAt": "2022-09-15T16:02:37.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    categories: [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        }
    ],
    categoryId: "",
    page: 1,
    totalPage: [
        1,
        2,
        3,
        4,
        5
    ],
    prev: 1,
    next: 2
}
  export default{
    name: 'Restaurants',
    components:{
      NavTabs,
      RestaurantCard,
      RestaurantsNavPills,
      RestaurantsPagination
    },
    data(){
      return {
        restaurants: [],
        categories: [],
        categoryId: -1,
        currentPage: 1,
        totalPage: -1,
        previousPage: -1,
        nextPage: -1,
      }
    },
    created(){
        const {categoryId} = this.$route.query
        this.fetchRestaurants(categoryId)
    },
    methods: {
      fetchRestaurants(){
        const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }

  }
</script>