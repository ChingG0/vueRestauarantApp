<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
      <div class="row">
        <Users v-for="user in users" :key="user.id" :init-users ='user'/>
      </div>
  </div>
</template>
<script>
  import NavTabs from '../components/Restaurants/NavTabs.vue'
  import Users from '../components/UsersTop/Users.vue'
  const dummyData = {
    users: [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
            "isAdmin": true,
            "image": "https://play-lh.googleusercontent.com/wxV-OSUpdXBGN0sYl_dr4qB9ZzHGb6bbupSx0x9mz8Bp85pRqCYKqXH1CnyadmDIf9k=w480-h960-rw",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
            "isAdmin": false,
            "image": "https://play-lh.googleusercontent.com/wxV-OSUpdXBGN0sYl_dr4qB9ZzHGb6bbupSx0x9mz8Bp85pRqCYKqXH1CnyadmDIf9k=w480-h960-rw",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$468nOG/AkeLo4a1ek5S83OisBroGv/Y72H1uVXEy1XqsiUYhrboxe",
            "isAdmin": false,
            "image": "https://play-lh.googleusercontent.com/wxV-OSUpdXBGN0sYl_dr4qB9ZzHGb6bbupSx0x9mz8Bp85pRqCYKqXH1CnyadmDIf9k=w480-h960-rw",
            "createdAt": "2022-09-15T16:02:37.000Z",
            "updatedAt": "2022-09-15T16:02:37.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
  export default{
    components:{
      NavTabs,
      Users
    },
    data() {
      return {
        users: []
      }
    },
    created(){
      this.fetchUsers()
    },
    methods: {
      fetchUsers(){
        const {users} = dummyData
        this.users = users
      }
    }
  }
</script>