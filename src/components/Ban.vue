<template>
  <div class="banner">
    <img src="../assets/banner.jpg" :atl="title">
  </div>
</template>

<script>
export default {
  name: 'ban',
  data () {
    return {
      src: '../assets/banner.jpg',
      title: '嘉大学生专场'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
