<template>
  <div class="ad">
    <h2>{{ addata.tit }}</h2>
    <ad2 :ad2data="addata.ad2"></ad2>
    <ad3 :ad3data="addata.ad3"></ad3>
    <ad1 :ad1data="addata.ad1"></ad1>
  </div>
</template>

<script>
import Ad2 from './Ad2'
import Ad3 from './Ad3'
import Ad1 from './Ad1'
export default {
  name: 'ad',
  components: {
    Ad2, Ad3, Ad1
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
