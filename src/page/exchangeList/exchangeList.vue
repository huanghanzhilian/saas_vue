<template>
  <div class="exchange_container">
    <ul class="exchange_list_wrap" v-load-more="loaderMore">
      <router-link tag="li" :to="{path: '/orderDetail', query:{id:item.id}}" class="dopser_item" v-for="item in orderListArr">
        <div class="dopser_item_l">
          <img :src="item.roadcastImg">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title ellipsis">{{item.describe}}</p>
            <p class="item_time">兑换时间 {{item.time}}</p>
          </div>
          <div class="dopser_item_r_r">
            <span class="status">{{item.status?'成功':'失败'}}</span>
            <i class="iconfont icon-go"></i>
          </div>
        </div>
      </router-link>
    </ul>
    <p v-if="orderLoading" class="empty_data">加载中...</p>
    <p v-if="touchend" class="empty_data">没有更多了</p>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getExchangeList } from 'src/service/getData'
import { loadMore, getImgPath } from 'src/components/common/mixin'

export default {
  //数据
  data() {
    return {
      page: 1, //页数
      querySize: 8, //请求条数
      orderListArr: [], // 店铺列表数据
      touchend: false, //没有更多数据
      nothing: false, //无数据
      orderLoading: false, //显示加载动画
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

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
  mixins: [loadMore, getImgPath],

  //计算值 这里可以实时监听某个数据的变化
  computed: {

  },

  //方法
  methods: {
    async initData() {
      //获取数据
      let res = await getExchangeList(this.page, this.querySize);
      this.orderListArr = [...res.data.row];
      //如果当前页等于总页数 到底了
      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
      }
      //数据为空
      if (res.data.row.length == 0) {
        this.nothing = true;
      } else {
        this.nothing = false;
      }
    },


    //到达底部加载更多数据
    async loaderMore() {
      if (this.touchend) {
        return
      }
      //防止重复请求
      if (this.preventRepeatReuqest) {
        return
      }
      this.orderLoading = true;
      this.preventRepeatReuqest = true;

      //数据的定位加20位
      this.page += 1;
      let res = await getExchangeList(this.page, this.querySize);
      this.hideLoading();
      this.orderListArr = [...this.orderListArr, ...res.data.row];
      //当获取数据小于20，说明没有更多数据，不需要再次请求数据
      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
        return
      }
      this.preventRepeatReuqest = false;
    },
    //开发环境与编译环境loading隐藏方式不同
    hideLoading() {
      this.orderLoading = false;
    },


  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.exchange_container {
  background-color: #fff !important;
}

.exchange_list_wrap {
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
      width: .9rem;
      text-align: center;
      margin-right: .16rem;
      img {
        width: .9rem;
        height: .9rem;
        display: block;
      }
    }
    .dopser_item_r {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .3rem .2rem .3rem 0;
      .item_title {
        width: 4.6rem;
        font-size: .32rem;
        margin-bottom: .1rem;
      }
      .item_time {
        color: #929292;
      }
      .status {
        color: #838586;
      }
      i {
        color: #929292;
        /*display: block;
        line-height: .28rem;*/
      }
    }
  }
}





/*没有更多*/

.empty_data {
  @include sc(0.24rem, #666);
  text-align: center;
  line-height: 1rem;
}


/*没有更多end*/

</style>
