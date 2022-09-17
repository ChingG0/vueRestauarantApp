<template>
  <div class="container py-5">
    <RestaurantDetail :initRestaurant="restaurant"/>
    <hr>
    <RestaurantComments :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment"/>
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
  import RestaurantDetail from '../components/Restaurant/RestaurantDetail'
  import RestaurantComments from '../components/Restaurant/RestaurantComments'
  import CreateComment from '../components//Restaurant/CreateComment.vue'

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
        "updatedAt": "2022-09-16T15:29:42.145Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
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
    },
    isFavorited: false,
    isLiked: false
}
  const dummyUser = {
    currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
    },
    isAuthenticated: true
  }
  export default{
    name: 'Restaurant',
    components: {
      RestaurantDetail,
      RestaurantComments,
      CreateComment,
    },
    data(){
      return{
        restaurant: {
          id: -1,
          name: '',
          categoryName: '',
          image: '',
          openingHours: '',
          tel: '',
          address: '',
          description: '',
          isFavorited: false,
          isLiked: false,
        },
        restaurantComments: [],
        currentUser: dummyUser.currentUser
      }
    },
    created(){
      const {id} = this.$route.params
      this.fetchRestaurant(id)
    },
    methods: {
      fetchRestaurant(){
        const {restaurant, isFavorited, isLiked} = dummyData
        const {id, name, Category, image, opening_hours: openingHours, tel, address, description, Comments} = restaurant
        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name: '未分類',
          image,
          openingHours: openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        }
        this.restaurantComments = Comments
      },
      afterDeleteComment(commentId){
        this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
      },
      afterCreateComment(payload){
        const {commentId, restaurantId, text} = payload
        this.restaurantComments.push({
          id: commentId,
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
          text,
          createdAt: new Date()
        })
      }
    }
  }
</script>