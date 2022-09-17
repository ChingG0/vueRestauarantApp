<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td> {{user.name}}</td>
          <td>{{user.role}}</td>
          <td>
            <button v-if="user.isAdmin" type="button" class="btn btn-link" @click.prevent.stop="toggleIsAdmin(user.id)">
              set as user
            </button>
            <button v-if="!user.isAdmin" type="button" class="btn btn-link" @click.prevent.stop="toggleIsAdmin(user.id)">
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/Admin/AdminNav.vue';
const dummyData = {
  users: [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
      "isAdmin": true,
      "image": null,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z"
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z"
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$468nOG/AkeLo4a1ek5S83OisBroGv/Y72H1uVXEy1XqsiUYhrboxe",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z"
    }
  ]
}
export default {
  name: 'AdminUsers',
  components: { AdminNav },
  data(){
    return{
      users: []
    }
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      this.users = dummyData.users.map(user=>({
        ...user,
        role: user.isAdmin? 'Admin': 'user'
      }))
    },
    toggleIsAdmin(userId){
      this.users = this.users.map(user=>{
        if(user.id === userId){
          return {
            ...user,
            isAdmin: !user.isAdmin,
            role: !user.isAdmin? 'Admin': 'user'
          }
        }
        return user
      })
    },
  }
}
</script>