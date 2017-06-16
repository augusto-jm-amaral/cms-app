<template>
  <div class="home">
    <navbar></navbar>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Navbar from './Navbar'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data () {
    return {
    }
  },
  computed: {
    // ...mapGetters({
    //   playersOnline: 'currentPlayersOnline'
    // })
  },
  methods: {
    // submitName () {
    //   this.$store.dispatch('enterGame', {
    //     name: this.$refs.name.value
    //   })
    //   this.$socket.emit(Constants.EMIT.STARTING, { name })
    //   this.$router.push('/gameroom')
    // }
  }
}
</script>

<style lang="scss" scoped>
  .home {

  }
</style>
