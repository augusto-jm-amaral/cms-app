<template>
  <div class="signup">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-content white-text deep-purple darken-2">
              <span class="card-title">Create Account</span>
            </div>
            <div class="card-action">
              <form class="row" v-on:submit.prevent="onSubmit">
                <div class="input-field col s12">
                  <input ref="name" id="name" type="text" class="validate" required>
                  <label for="name">Name</label>
                </div>
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
              <button ref="toastsuccess" type="button" style="display: none;" onclick="Materialize.toast('User successfully created', 4000)"></button>
              <button ref="toasterror" type="button" style="display: none;" onclick="Materialize.toast('This email already exists', 4000)"></button>
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
  name: 'signup',
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
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value
      }

      axios.post('/users', payload)
        .then(res => {
          self.$refs.toastsuccess.onclick()
        })
        .catch(err => {
          console.log(err)
          self.$refs.toasterror.onclick()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .signup {
    .card {
      margin-top: 10%;

      button {
        width: 100%
      }
    }
  }
</style>
