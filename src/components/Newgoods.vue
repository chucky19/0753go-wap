<template>
  <div class="newgoods">
    <h2>{{ hotdata.tit }}</h2>
    <el-row>
        <el-col :span="12" v-for="item in hotdata.items">
          <div class="grid-content">
            <a :href="item.url">
              <img :src="item.imgsrc" width="100%">
              <em class="item-name">{{ item.title }}</em>
              <span class="item-price" style="color:#ff3c6e"><span class="yen">¥</span>{{ item.price }}</span>
            </a>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'newgoods',
  props: ['hotdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.newgoods{
  h2{
    color: #333;
    font-size: 14px;
    padding: 10px 0 5px;
    text-align: left;
    text-indent: 1em;
  }
}
</style>
