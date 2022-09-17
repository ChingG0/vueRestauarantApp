<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
    人氣餐廳
    </h1>
    <hr>
    <TopRestaurant v-for="restaurant in restaurants" :initRestaurant="restaurant" :key="restaurant.id"/>
  </div>
</template>

<script>
  import NavTabs from '../components/Restaurants/NavTabs.vue'
  import TopRestaurant from '../components/RestaurantsTop/TopRestaurant.vue';
  /* eslint-disable */
  const dummyData = {
    restaurants: [
        {
            "id": 50,
            "name": "Miss Giovanni Doyle",
            "tel": "1-454-196-3281 x97209",
            "address": "9138 King Walks",
            "opening_hours": "08:00",
            "description": "Et sed rerum laudantium debitis ea in natus placea",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.36736584111211",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Miss Timmy Wolf",
            "tel": "1-146-038-8870",
            "address": "4823 Daugherty Pines",
            "opening_hours": "08:00",
            "description": "est debitis eligendi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.91152373491232",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Maye Breitenberg",
            "tel": "1-807-074-4457 x2346",
            "address": "5612 Fadel Summit",
            "opening_hours": "08:00",
            "description": "consectetur ipsa velit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.66024624727571",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Loraine Ward",
            "tel": "127-239-3235 x811",
            "address": "6937 Kozey Islands",
            "opening_hours": "08:00",
            "description": "minus ex delectus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.06766355432892",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Kristin West",
            "tel": "046.362.5507 x5500",
            "address": "1570 Kari Lodge",
            "opening_hours": "08:00",
            "description": "Nobis est aperiam accusantium voluptatem quo harum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.78440541410209",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Luz Leannon",
            "tel": "(240) 122-1299",
            "address": "914 Abernathy Estates",
            "opening_hours": "08:00",
            "description": "Rerum beatae natus dolor illum cupiditate eaque. P",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.354362026607",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Lauriane Weber",
            "tel": "621-680-7209 x681",
            "address": "261 Rau Island",
            "opening_hours": "08:00",
            "description": "Rem incidunt amet facilis iure laudantium voluptat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.78259954291338",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Ms. Madelynn Nolan",
            "tel": "1-478-899-2995 x2709",
            "address": "63284 Bernier Courts",
            "opening_hours": "08:00",
            "description": "Consequatur molestiae voluptatum hic enim dolores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.67725745621127",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Rubie Ratke DVM",
            "tel": "1-032-331-7233 x1075",
            "address": "61362 Jenkins Manor",
            "opening_hours": "08:00",
            "description": "Perspiciatis sunt ex consectetur officia. Et in vi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.117619363005545",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Cary Grant",
            "tel": "1-684-760-4234 x497",
            "address": "6600 Chaya Meadows",
            "opening_hours": "08:00",
            "description": "Magnam aut et et fugiat qui deserunt. Consequatur ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.786878850824863",
            "viewCounts": 0,
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
  }
  export default{
    components:{
      NavTabs,
      TopRestaurant
    },
    data(){
      return {
        restaurants: dummyData.restaurants
      }
    }
  }
</script>