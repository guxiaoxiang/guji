<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import login from '@/components/login.vue'
export default {
  name: 'app',
  components: {
    // login
  },
  mounted() {
    let currentUser = this.$ls.get('user') == null ? null : this.$ls.get('user')
    if (currentUser) {
      this.$store.commit('setUser', currentUser)
    }
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
