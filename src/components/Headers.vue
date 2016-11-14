<template>
  <div class="headers">
    <div class="headers-c">
      <form action="/search" method="post" target="_self" id="searchForm" name="searchForm">
        <div class="search-box">
          <input value="" class="search-input" type="search" name="keywords" placeholder="搜索商品">
        </div>
        <input type="submit" value="" class="search-button el-icon-search">
      </form>
    </div>
    <div class="headers-l"><a href="/catalog">分类</a></div>
    <div class="headers-r"><a :class="{ 'login': login}" href="/user">登录</a></div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      msg: '这里是广告1',
      login: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.headers{
  position: relative;
  height: 46px;
  background: #017DC7;
  overflow: hidden;
  .headers-c{
    margin: 6px 54px;
    background: #fff;
    border-radius: 4px;
    height: 34px;
    position: relative;
    .search-box{
      padding: 8px 12px;
    }
    .search-input{
      width: 100%;
      height: 100%;
      border:0;
      font-size: 14px;
      outline: 0;
      border: 0;
    }
    .search-button{
      position: absolute;
      top: 0;
      right: 10px;
      width: 20px;
      height: 30px;
      border: 0;
      z-index: 1;
      cursor: pointer;
      background: url(../assets/index_biaoqian.png) no-repeat -82px 2px;
      background-size: 282px 126px;
      background-color: #fff;
      text-indent: -1000em;
    }
  }
  .headers-l{
    position: absolute;
    top:0;
    left: 0;
    width: 46px;
    height: 46px;
    color: #fff;
    a{
      display: block;
      height: 45px;
      width: 32px;
      margin-left: 10px;
      text-indent: -1000em;
      background: url(../assets/index_biaoqian.png) no-repeat 2px 6px;
      background-size: 282px 126px;
    }
  }
  .headers-r{
    position: absolute;
    top:0;
    right: 0;
    width: 46px;
    height: 46px;
    color: #fff;
    a{
      display: block;
      height: 45px;
      line-height: 45px;
      margin-right: 10px;
      color: white;
      width: 32px;
    }
    .login{
      text-indent: -9999em;
      background: url(../assets/index_biaoqian.png) no-repeat -30px 8px;
      background-size: 282px 126px;
    }
  }
}
</style>
