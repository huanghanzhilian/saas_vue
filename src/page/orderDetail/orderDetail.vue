<template>
  <div class="orderDetail_container">
    <div class="order_topbox">
      <span class="order_topleft">交易关闭</span>
      <span class="order_topRight">查看卡密</span>
    </div>
    <div class="orderDetail_content">
      <div class="dopser_item">
        <div class="dopser_item_l">
          <img src="http://static.samuredwonder.com/image/video/cover/FtZ__659zWCVt04Y7DgrDDaQwZ8y">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title">酷我音乐豪华VIP券</p>
            <p class="item_time">2积分</p>
          </div>
          <div class="dopser_item_r_r">
          </div>
        </div>
      </div>
      <div class="orderDetail_describe">
        <div class="inner_line">
          <span class="title">支付金额：</span>
          <div class="content">2积分</div>
        </div>
        <div class="inner_line">
          <span class="title">订单编号：</span>
          <div class="content">73679418268</div>
        </div>
        <div class="inner_line">
          <span class="title">下单时间：</span>
          <div class="content">73679418268</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'


export default {
  //数据
  data() {
    return {

    }
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
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';


.order_topbox {
  background-color: #fff;
  @include fj;
  padding: .2rem;
  margin-bottom: .15rem;
  .order_topRight {
    display: inline-block;
    padding: .02rem .08rem;
    border: solid 0.02rem #2dc6f0;
    background-color: #fff;
    border-radius: 4px;
    color: #2dc6f0;
  }
}

.orderDetail_content {
  background-color: #fff;
  padding: .2rem;
  .dopser_item {
    display: flex;
    font-size: .28rem;
    padding: .18rem;
    border-bottom: 0.025rem solid #f0f0f0;


    .dopser_item_l {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-right: .16rem;
      img {
        width: 2.6rem;
        height: 1.26rem;
        display: block;
      }
    }



    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .3rem 0 .3rem 0;
      .dopser_item_r_r {
        width: 1rem;
      }
      .excha_go {
        display: inline-block;
        padding: .02rem .08rem;
        border: none;
        border-radius: 4px;
        background-color: #d5d5d5;
        color: #fff;
        &.on {
          display: inline-block;
          padding: .02rem .08rem;
          border: solid 0.02rem #446ee2;
          background-color: #fff;
          border-radius: 4px;
          color: #446ee2;
        }
      }
      .item_title {
        font-size: .32rem;
        margin-bottom: .1rem;
      }
      .item_time {
        color: #b2a7a2;
      }
    }
  }

  .orderDetail_describe {
    padding-top: .1rem;
    color: #697074;
    .inner_line {
      display: flex;
      padding: .08rem 0;
      .content {
        flex: 1;
      }
      .title {
        min-width: 1.42rem;
        text-align: right;
      }
    }
  }
}

</style>
