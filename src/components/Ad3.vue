<template>
  <div class="ad3">
    <el-row>
        <el-col :span="8" v-for="item in ad3data"><div class="grid-content"><a href="/catalog"><img :src="item.imgsrc" alt="广告"></a></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ad3',
  props: ['ad3data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ad3{
  margin: 0 10px 10px;
}
</style>
