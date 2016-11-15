<template>
  <div class="ad2">
    <el-row>
        <el-col :span="12" v-for="item in addata"><div class="grid-content"><a href="/catalog"><img :src="item.imgsrc" alt="广告"></a></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ad2',
  props: ['addata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ad2{
  margin: 0 10px 10px;
}
</style>
