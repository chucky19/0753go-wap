<template>
  <div>
        <el-col :span="12" v-for="item in goodsdata">
          <div class="grid-content" style="padding:0 10px 10px;">
            <a :href="item.url" class="goods">
              <img :src="item.imgsrc" width="100%">
              <em class="item-name" v-text="item.title"></em>
              <span class="item-price"><span class="yen">¥</span>{{ item.price }}</span>
            </a>
          </div>
        </el-col>
  </div>
</template>

<script>
export default {
  name: 'goods',
  props: ['goodsdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.goods{
  display:block;
  background: #fff;
  text-align: left;
  .item-name{
    font-size: 14px;
    color: #333;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 9px 9px 0;
    text-align: left;
  }
  .item-price{
    font-size: 18px;
    font-weight: 700;
    padding: 0 9px;
    line-height: 32px;
    color: #ff3c6e;
    text-align: left;
    .yen{
      margin-right: 3px;
      font-weight: 400;
      vertical-align: baseline;
      font-size: 14px;
    }
  }
}
</style>
