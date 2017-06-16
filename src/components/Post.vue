<template>
  <div class="dash">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-content white-text deep-purple darken-2">
              <span class="card-title">Post</span>
            </div>
            <div class="card-action">
              <form class="row" v-on:submit.prevent="onSubmit">
                <div class="input-field col s12">
                  <input ref="title" id="title" type="text" class="validate" required>
                  <label for="title">Title</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="body" class="materialize-textarea"></textarea>
                  <label for="body">Body</label>
                </div>
                <div class="input-field col s12">
                  <input ref="path" id="path" type="url" class="validate" required>
                  <label for="path">Path</label>
                </div>
                <button class="btn waves-effect waves-light btn-large deep-purple darken-2" type="submit" name="action">Create
                </button>
              </form>
              <button ref="toastsuccess" type="button" style="display: none;" onclick="Materialize.toast('User successfully created', 4000)"></button>
              <button ref="toasterror" type="button" style="display: none;" onclick="Materialize.toast('Error creating', 4000)"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'post',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .dash {

  }
</style>
