<template>
  <!-- 组件盒子 -->
  <nav class="msite_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide food_types_container" v-for="item in roadcastArray">
          <div class="link_to_food">
            <img :src="item.roadcastImg" @error="imgError($event)">
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import { roadcastList } from 'src/service/getData'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'


export default {
  //数据
  data() {
    return {
        roadcastArray:[],//轮播数据
    }
  },
  //需要使用的模块
  components: {

  },

  //父组件的参数书
  props: [],

  //需要引用的外部js方法
  mixins: [],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取轮播图数据
      await roadcastList().then(res => {
        this.roadcastArray=res.data;
      }).then(()=>{
        //初始化swiper
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          loop: true
        });
      })
    },
  },

  //监听
  watch: {

  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    //this.openid = this.$route.query.openid;
    //this.productId = this.$route.query.productId;
  },

  //挂载前状态
  beforeMount() {

  },
  //挂载结束状态
  mounted() {
    this.initData();
  },
  //更新前状态
  beforeUpdate() {

  },
  //更新完成状态
  updated() {

  },
  //销毁前状态
  beforeDestroy() {

  },
  //销毁完成状态
  destroyed() {

  },
  
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; //初始化页面背景动画

/*轮播图*/

.msite_nav {
  background-color: #000;
  height: 3.2rem;
  .swiper-container {
    height: 100%;
  }
  .food_types_container {
    width: 100%;
    height: 100%;
    .link_to_food {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
