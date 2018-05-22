<template>
  <!-- 组件盒子 -->
  <div class="msiteTopWrap">
    <div class="topCon">
      <i class="icon_styles iconfont icon-zuanshi"></i><span>金币</span><span class="text_yellow">99</span>
    </div>
    <router-link tag="div" to="/exchangeList" class="topCon">
      <i class="icon_styles2 iconfont icon-jilu"></i><span>兑换记录</span>
    </router-link>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import { indexOrderList } from 'src/service/getData'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'


export default {
  //数据
  data() {
    return {
      commoArray: [], //商品列表
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
      //获取数据
      /*await indexOrderList().then(res => {
        this.commoArray = res.data;
        console.log(this.commoArray)
      })*/
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
    //this.initData();
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

/*头部nav s */

.msiteTopWrap {
  display: flex;
  background-color: #fff;
  padding: .2rem 0;
  margin-bottom: .15rem;
  .topCon {
    flex: 1;
    text-align: center;
    align-items: center;
    border-right: solid .025rem #e7e7e7;
    vertical-align: middle;
    &:last-child {
      border-right: none;
    }
    i {
      margin-right: .1rem;
      font-size: .34rem;
      vertical-align: middle;
    }
    span {
      margin-right: .1rem;
      vertical-align: middle;
      &.text_yellow {
        color: #fa5908;
      }
    }
  }
}

/*头部nav e */

</style>
