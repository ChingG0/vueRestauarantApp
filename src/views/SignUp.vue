<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input id="name" name="name" v-model="name" type="text" class="form-control" placeholder="name"
          autocomplete="username" required autofocus>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input id="email" name="email" v-model="email" type="email" class="form-control" placeholder="email"
          autocomplete="email" required>
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" name="password" v-model="password" type="password" class="form-control"
          placeholder="Password" autocomplete="new-password" required>
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input id="password-check" name="passwordCheck" v-model="passwordCheck" type="password" class="form-control"
          placeholder="Password" autocomplete="new-password" required>
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign in
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'

import { Toast } from '../utils/helpers'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.name ||
        !this.email ||
        !this.password ||
        !this.passwordCheck) {
        Toast.fire({
          icon: 'warning',
          title: '請確認已填寫所有欄位'
        })
        return
      }

      if (this.password !== this.passwordCheck) {
        Toast.fire({
          icon: 'warning',
          title: '兩次輸入的密碼不同'
        })
        this.passwordCheck = ''
        return
      }

      try {
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })
        
        if(data.status !== 'success'){
          throw new Error(data.message)
        }
      }
      catch (err) {
        console.log(err)
        Toast.fire({
          icon: 'error',
          title: '無法註冊，請稍候再試'
        })
      }
    }
  }
}
</script>