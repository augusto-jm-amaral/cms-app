<template>
  <div class="signin">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-content white-text deep-purple darken-2">
              <span class="card-title">Login</span>
            </div>
            <div class="card-action">
              <form class="row" v-on:submit.prevent="onSubmit">
                <div class="input-field col s12">
                  <input ref="email" id="email" type="email" class="validate" required>
                  <label for="email">Email</label>
                </div>
                <div class="input-field col s12">
                  <input ref="password" id="password" type="password" class="validate" required>
                  <label for="password">Password</label>
                </div>
                <button class="btn waves-effect waves-light btn-large deep-purple darken-2" type="submit" name="action">Sign in
                    <i class="material-icons right">send</i>
                </button>
              </form>
              <button ref="toast" type="button" style="display: none;" onclick="Materialize.toast('Login or password incorrect', 4000)"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar'
import axios from 'axios'

export default {
  name: 'signin',
  components: {
    Navbar
  },
  data () {
    return {
    }
  },
  methods: {
    onSubmit () {
      let self = this

      let payload = {
        email: this.$refs.email.value,
        password: this.$refs.password.value
      }

      axios.post('/users/login', payload)
        .then(res => {
          self.$localStorage.set('token', res.data.token)
          self.$localStorage.set('name', res.data.name)
          self.$localStorage.set('_id', res.data._id)

          if (self.$route.query.redirect) {
            self.$router.push(self.$route.query.redirect)
          } else {
            self.$router.push('/')
          }
        })
        .catch(err => {
          self.$refs.toast.onclick()
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .signin {
    .card {
      margin-top: 10%;

      button {
        width: 100%
      }
    }
  }
</style>
