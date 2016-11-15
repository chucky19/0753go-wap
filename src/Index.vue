<template>
  <div id="app">
    <headers></headers>
    <ban></ban>
    <navicon></navicon>
    <ad  :addata="ad"></ad>
    <newgoods :hotdata="newgoods"></newgoods>
    <moregoods :hotdata="moregoods"></moregoods>
  </div>
</template>

<script>
import Headers from './components/Headers'
import Ban from './components/Ban'
import Navicon from './components/Navicon'
import Ad from './components/Ad'
import Ad2 from './components/Ad2'
import Newgoods from './components/Newgoods'
import Moregoods from './components/Moregoods'

export default {
  name: 'index',
  components: {
    Headers, Ban, Navicon, Ad, Ad2, Newgoods, Moregoods
  },
  data () {
    return {
      ad: {
        tit: '热门推荐',
        ad1: [
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1473729036787469626.jpg',
            url: '3'
          }
        ],
        ad2: [
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1444190117352185908.jpg',
            url: 'http://www.0753go.com/mobile/category.php?id=742'
          },
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1468986110418388250.jpg',
            url: '3'
          }
        ],
        ad3: [
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1468986975999218977.jpg',
            url: '3'
          },
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1477040722760913486.jpg',
            url: '3'
          },
          {
            title: 'ad2的title',
            imgsrc: 'http://www.0753go.com/data/afficheimg/1468835318596652517.jpg',
            url: '3'
          }
        ]
      },
      newgoods: {
        tit: '每日推荐',
        items: [{
          id: '2503',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2503_G_1451102514394.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2503',
          title: '颜妹一品香—麻油鸡翅 400g',
          price: '52'
        },
        {
          id: '2471',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2471_G_1450338962270.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2471',
          title: '卡撒天娇—爱海无际套餐',
          price: '1999'
        },
        {
          id: '2413',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2413_G_1449195974967.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2471',
          title: '卡撒天娇—爱海无际套餐',
          price: '798'
        },
        {
          id: '2411',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2411_G_1449126698121.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2411',
          title: '美食工坊—黑白巧克力DIY（100g）',
          price: '48'
        }]
      },
      moregoods: {
        tit: '更多精彩',
        items: [{
          id: '3019',
          imgsrc: 'http://www.0753go.com/images/201609/source_img/3019_G_1474334928696.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=3019',
          title: '无穷盐焗鸡翅、香辣鸡翅',
          price: '9.9'
        },
        {
          id: '2471',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2471_G_1450338962270.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2471',
          title: '卡撒天娇—爱海无际套餐',
          price: '1999'
        },
        {
          id: '2413',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2413_G_1449195974967.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2471',
          title: '卡撒天娇—爱海无际套餐',
          price: '798'
        },
        {
          id: '2411',
          imgsrc: 'http://www.0753go.com/images/201512/goods_img/2411_G_1449126698121.jpg',
          url: 'http://www.0753go.com/mobile/tuangou_detail.php?id=2411',
          title: '美食工坊—黑白巧克力DIY（100g）',
          price: '48'
        }]
      }
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f5f5;
}
</style>
