<template>
  <div class="exchange_container">
    <header class="header">
      <form class="search_form">
        <div class="form_box">
          <i class="icon-sousuo iconfont"></i>
          <input type="search" name="search" placeholder="搜索名称" class="search_input">
        </div>
        
        <input type="submit" value="搜索" name="submit" class="search_submit">
      </form>
    </header>
    <ul class="exchange_list_wrap">
      <li class="dopser_item">
        <div class="dopser_item_l">
          <img src="http://static.samuredwonder.com/image/video/cover/FtZ__659zWCVt04Y7DgrDDaQwZ8y">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title">酷我音乐豪华VIP券</p>
            <p class="item_time">2积分</p>
          </div>
          <div class="dopser_item_r_r">
            <span class="excha_go">兑换</span>
          </div>
        </div>
      </li>
      <li class="dopser_item">
        <div class="dopser_item_l">
          <img src="http://static.samuredwonder.com/image/video/cover/FtZ__659zWCVt04Y7DgrDDaQwZ8y">
        </div>
        <div class="dopser_item_r">
          <div class="dopser_item_r_l">
            <p class="item_title">酷我音乐豪华VIP券</p>
            <p class="item_time">2积分</p>
          </div>
          <div class="dopser_item_r_r">
            <span class="excha_go on">兑换</span>
          </div>
        </div>
      </li>
    </ul>
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

.exchange_container {
  background-color: #fff !important;
}


/*搜索 s */
.header{

}
.search_form{
  padding: .15rem;
  display: flex;
  .search_submit{
    padding: 0 .15rem;
    background-color: transparent;
  }
  .form_box{
    flex: 1;
    align-items: center;
    display: flex;
    background-color: #eee;
    padding: .1rem .2rem;
    border-radius: 8px;
    i{
      font-size: .36rem;
      margin-right: .1rem;
    }
    input{
      line-height: .36rem;
      flex: 1;
      background-color: #eee;
    }
  }
}
/*搜索 e */



/*商品列表 s */

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
        color: #446ee2;
      }

      i {
        color: #929292;
        /*display: block;
        line-height: .28rem;*/
      }
    }
  }
}


/*商品列表 e */

</style>
