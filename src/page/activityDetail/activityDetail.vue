<template>
  <div class="activityDetail_container">
    <div class="activity_top">
      <div class="activity_top_wrap">
        <img src="http://static.samuredwonder.com/image/video/cover/FtZ__659zWCVt04Y7DgrDDaQwZ8y">
        <div class="content">
          <div class="order_name_box">
            <div class="name">酷我音乐豪华VIP券</div>
            <div class="order_number">
              <span class="number1"><span class="fangda">2</span>积分</span>
              <span class="number2">￥5.0</span>
            </div>
          </div>
          <div class="linese">
            <div class="linese_left">
              <i class="iconfont icon-riqi"></i> 有效期
            </div>
            <div class="linese_right">2018-04-25 至 2018-04-26</div>
            
          </div>
        </div>
          

      </div>
    </div>

    <div class="activity_content">
      <div class="title">商品详情</div>
      <div class="describe">奥利奥（Oreo）Mini原味小饼干零食 55g（新老包装随机发货） </div>
      <div class="title2">使用流程</div>
      <ol class="text_list">
        <li class="text_item">手动阀手动阀手动阀手动阀<a href="#">酷我音乐</a>反浪费口水防空炮付款<a href="#">酷我音乐</a>卡金佛奥卡福叫法叫</li>
        <li class="text_item">gsggrrh发给我日日通过认为如果温热阀手动阀卡金佛奥卡福叫法叫</li>
        <li class="text_item">手dfdsafsafafrdhryr奥卡福叫法叫</li>
      </ol>
    </div>

    <div class="activity_content">
      <div class="title">重要声明</div>
      <ol class="text_list text_listOne">
        <li class="text_item">手动阀手动阀手动阀手动阀佛奥卡福叫法叫</li>
        <li class="text_item">gsggrrh发给我日日通过认为如果温热阀手动阀卡金佛奥卡福叫法叫</li>
        <li class="text_item">手dfdsafsafafrdhryr奥卡福叫法叫</li>
      </ol>
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

.activity_top{
  .activity_top_wrap{
    background-color: #fff;
    margin-bottom: .18rem;
    img{
      width: 100%;
      height: 3.5rem;
    }
    .content{
      padding: .2rem;
      .order_name_box{
        .name{
          font-weight: 600;
          font-size:.34rem;
        }
        .order_number{
          padding-bottom: .2rem;
          border-bottom: solid .025rem #ccc;
          .number1{
            color: #3d66e0;
            .fangda{
              font-size:.44rem;
            }
          }
          .number2{
            color: #bababa;
             text-decoration:line-through;
          }
        }
      }

      .linese{
        @include fj;
        padding: .15rem 0 0 0;
        color: #6f6b72;
      }
    }
  }
}


.activity_content{
  background-color: #fff;
  margin-bottom: .18rem;
  padding: .2rem;
  color: #10202f;
  .title{
    font-size:.3rem;
    font-weight: 600;
    margin-bottom: .18rem;
  }
  .title2{
    margin-bottom: .05rem;
  }
  .describe{
    margin-bottom: .18rem;
  }
  .text_list{

    list-style-type: decimal;
    padding-left: .31rem;
    &.text_listOne{
      color: #6e767c;
    }
    a{
      color: #5871e1;
      text-decoration: underline;
    }
  }
}


</style>
