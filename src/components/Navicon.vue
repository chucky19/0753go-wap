<template>
  <div class="navIcon">
  <el-row>
    <el-col :span="6"><div class="grid-content"><a class="nav-catalog" href="/catalog">分类</a></div></el-col>
    <el-col :span="6"><div class="grid-content"><a class="nav-flow" href="/flow">购物车</a></div></el-col>
    <el-col :span="6"><div class="grid-content"><a class="nav-user" href="/user">用户中心</a></div></el-col>
    <el-col :span="6"><div class="grid-content"><a class="nav-con" href="tel:4000753004">联系我们</a></div></el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'navicon',
  data () {
    return {
      msg: '这里是导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navIcon{
  height: 70px;
  background: #fff;
  margin-bottom: 10px;
  a{
    position: relative;
    text-align: center;
    display: block;
    height: 70px;
    &:before{
      width: 37px;
      height: 47px;
      content: '';
      display: block;
      margin: auto;
    }
  }
  .nav-catalog:before{
    background: url(../assets/index_biaoqian.png) no-repeat -111px -35px;
    background-size: 282px 126px;
  }
  .nav-flow:before{
    background: url(../assets/index_biaoqian.png) no-repeat -154px -35px;
    background-size: 282px 126px;
  }
  .nav-user:before{
    background: url(../assets/index_biaoqian.png) no-repeat -198px -35px;
    background-size: 282px 126px;
  }
  .nav-con:before{
    background: url(../assets/index_biaoqian.png) no-repeat -241px -35px;
    background-size: 282px 126px;
  }
}
</style>
