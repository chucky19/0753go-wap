<template>
  <div class="moregoods">
    <h2>{{ hotdata.tit }}</h2>
    <el-row>
        <goods v-if="hotdata.items[0]" :goodsdata="hotdata.items"></goods>
        <div v-else>暂时没有数据哦！</div>
    </el-row>
  </div>
</template>

<script>
import Goods from './Goods'

export default {
  name: 'moregoods',
  props: ['hotdata'],
  components: {
    Goods
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.moregoods{
  h2{
    color: #333;
    font-size: 14px;
    padding: 10px 0 5px;
    text-align: left;
    text-indent: 1em;
  }
}
</style>
