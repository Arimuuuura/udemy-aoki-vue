<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/children">Children</router-link> |
    <router-link to="/composition">Composition</router-link> |
    <router-link to="/props-emit">PropsEmit</router-link> |
  </nav>
  <router-view :setUpBooks="setUpBooks" :dataBooks="dataBooks" />
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const setUpBooks = reactive([
      {
        title: 'setup book Title1',
        author: 'setup author 1'
      },
      {
        title: 'setup book Title2',
        author: 'setup author 2'
      }
    ])

    return { setUpBooks }
  },
  data() {
    return {
      dataBooks: [
        {
          title: 'data book Title1',
          author: 'data author 1'
        },
        {
          title: 'data book Title2',
          author: 'data author 2'
        }
      ]
    }
  },
  provide() {
    return {
      userName: '親で設定した値'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
