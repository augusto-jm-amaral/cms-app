<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper deep-purple darken-2">
        <a href="/" class="brand-logo">CMS App</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a v-if="!token" href="/signin">Sign in</a></li>
          <li><a v-if="!token" href="/signup">Sign up</a></li>
          <li><a v-if="name" >Hello {{name}}</a></li>
          <li><a v-if="token" href="/post">Create</a></li>
          <li><a v-if="token" v-on:click="onLogout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  computed: {
    token () {
      return this.$localStorage.get('token')
    },
    name () {
      return this.$localStorage.get('name')
    }
  },
  methods: {
    onLogout () {
      this.$localStorage.remove('name')
      this.$localStorage.remove('token')
      this.$localStorage.remove('_id')
      axios.defaults.headers.common['Authorization'] = ''
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {

  }
</style>
