<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button @click.native="startHacking">Let's do it</el-button>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  name: 'app',
  components: {
    Hello
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>

</style>
