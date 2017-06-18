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
