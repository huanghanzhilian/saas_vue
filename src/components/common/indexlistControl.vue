<template>
  <!-- 组件盒子 -->
  <div class="content_box">
    <div class="content_top">
      <div class="content_top_title">大家都在兑</div>
      <router-link tag="span" to="list" class="content_mone">更多&gt;&gt;</router-link>
    </div>
    <ul class="content_list_wrap">
      <router-link :to="{path: '/activityDetail', query:{id:item.id}}" tag="li" class="content_list_item" v-for="item in commoArray">
        <div class="item_title">
          <div class="item_name ellipsis">{{item.describe}}</div>
          <div class="item_describe"><span class="text_yellow" style="margin-right: .06rem">{{item.goldcoin}}</span>金币</div>
        </div>
        <div class="item_imgBox">
          <img :src="item.roadcastImg" alt="">
        </div>
      </router-link>
    </ul>
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
      await indexOrderList().then(res => {
        this.commoArray = res.data;
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

/*商品列表 s */

.content_box {
  background-color: #fff;
  margin-bottom: .15rem;
  .content_top {
    @include fj;
    padding: .15rem .2rem;
    border-bottom: solid .025rem #e7e7e7;
    .content_top_title {
      font-size: .28rem;
    }
    .content_mone {
      color: $fontA;
    }
  }

  .content_list_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .content_list_item {
      list-style: none;
      width: 3.75rem;
      height: 3.22rem;
      padding: .2rem;
      background-color: #fff;
      border-bottom: solid .025rem #e7e7e7;
      border-right: solid .025rem #e7e7e7;
      &:nth-child(2n) {
        border-right: none;
      }

      .item_title {
        margin-bottom: .1rem;
        .item_name {
          margin-bottom: .08rem;
        }
        .item_describe {
          font-size: .24rem;
          .text_yellow{
            color:$fontC;
          }
        }
      }

      .item_imgBox {
        img {
          width: 100%;
        }
      }
    }
  }
}




/*商品列表 e */

</style>
