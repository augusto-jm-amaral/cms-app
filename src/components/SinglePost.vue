<template>
  <div class="dash">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-content white-text deep-purple darken-2">
              <span class="card-title">{{post.title}}</span>
            </div>
            <div class="card-action">
              <p>{{post.body}}</p>
<!--               <form class="row" v-on:submit.prevent="onSubmit">
                <div class="input-field col s12">
                  <input v-model="post.title" id="title" type="text" class="validate" required>
                  <label for="title">Title</label>
                </div>
                <div class="input-field col s12">
                  <textarea v-model="post.body" id="body" class="materialize-textarea" required></textarea>
                  <label for="body">Body</label>
                </div>
                <div class="input-field col s12">
                  <input v-model="post.path" id="path" type="text" class="validate" required>
                  <label for="path">Path</label>
                </div>
                <button ref="btnsubmit" class="btn waves-effect waves-light btn-large deep-purple darken-2" type="submit" name="action">Create
                </button>
              </form> -->
<!--               <button ref="toastsuccess" type="button" style="display: none;" onclick="Materialize.toast('User successfully created', 4000)"></button>
              <button ref="toastsuccessupdate" type="button" style="display: none;" onclick="Materialize.toast('User successfully updated', 4000)"></button>
              <button ref="toasterror" type="button" style="display: none;" onclick="Materialize.toast('Error creating', 4000)"></button> -->
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
  name: 'post',
  components: {
    Navbar
  },
  data () {
    return {
      post: {
        title: '',
        body: '',
        path: ''
      }
    }
  },
  methods: {
    // onSubmit () {
    //   let self = this
    //   let token = this.$localStorage.get('token')
    //   axios.defaults.headers.common['Authorization'] = `JWT ${token}`

    //   if (this.post._id) {
    //     axios.put(`/posts/${this.post._id}`, this.post)
    //       .then((res) => {
    //         self.$refs.toastsuccessupdate.onclick()
    //         self.$router.push('/')
    //       })
    //       .catch(err => {
    //         console.log(err)
    //         self.$refs.toasterror.onclick()
    //       })
    //   } else {
    //     axios.post('/posts', this.post)
    //       .then((res) => {
    //         self.$refs.toastsuccess.onclick()
    //         self.$router.push('/')
    //       })
    //       .catch(err => {
    //         console.log(err)
    //         self.$refs.toasterror.onclick()
    //       })
    //   }
    // }
  },
  mounted () {
    console.log(this.$route.path)
    let self = this

    if (this.$route.path) {
      axios.get(this.$route.path)
        .then((res) => { self.post = res.data })
        .catch((err) => {
          self.post = {
            title: 'Not Found',
            body: 'This page does not exist',
            path: ''
          }
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dash {
    .card {
      margin-top: 10%;
      
      form {
        button {
          width: 100%;
        }
      }
    }
  }
</style>
