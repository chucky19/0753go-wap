<template>
  <div class="ad">
    <h2>{{ addata.tit }}</h2>
    <ad2 :addata="addata.ad2"></ad2>
  </div>
</template>

<script>
import Ad2 from './Ad2'
export default {
  name: 'ad',
  components: {
    Ad2
  },
  props: ['addata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ad{
  h2{
    color: #333;
    font-size: 14px;
    padding: 10px 0 5px;
    text-align: left;
    text-indent: 1em;
  }
}
</style>
