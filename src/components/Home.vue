<template>
  <div class="home">
    <navbar></navbar>
    <div class="container">
      <div class="row post-list">
        <div class="col s12 m4" v-for="post in posts">
          <div class="card">
            <div class="card-content black-text">
              <span class="card-title">{{post.title}}</span>
              <p>{{post.body}}</p>
            </div>
            <div class="card-action">
              <a v-bind:href="'/post/' + post._id" v-if="token">Edit</a>
              <a class="delete-link" v-on:click="onDelete(post._id)" v-if="token">Delete</a>
              <a v-bind:href="post.path">See</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from './Navbar'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data () {
    return {
      posts: []
    }
  },
  computed: {
    token () {
      return this.$localStorage.get('token')
    }
  },
  methods: {
    onDelete (_id) {
      let self = this
      let token = this.$localStorage.get('token')
      axios.defaults.headers.common['Authorization'] = `JWT ${token}`
      axios.delete(`/posts/${_id}`)
        .then((res) => {
          self.onLoadPosts()
        }).catch(err => console.log(err))
    },
    onLoadPosts () {
      let self = this

      axios.get('/posts')
      .then((res) => {
        self.posts = res.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.onLoadPosts()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .post-list {
      margin-top: 50px;

      .delete-link {
        cursor: pointer;
      }
    }
  }
</style>
