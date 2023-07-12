<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <h1>App.Vue</h1>

  <router-link to="/">홈으로</router-link>
  <router-link to="/post">post</router-link>
  <router-view></router-view>
</template>

<script>
// import containerComponent from './components/containerComponent.vue'
// import postComponent from './components/postComponent.vue'

export default {
  name: 'App',
  components: {
    // containerComponent, postComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
