<template>
  <div class="activityDetail_container">
    <div class="activityDetail_wrap" v-if="detailsObject.name">
      <div class="activity_top">
        <div class="activity_top_wrap">
          <img :src="detailsObject.roadcastImg">
          <div class="content">
            <div class="order_name_box">
              <div class="name">{{detailsObject.name}}</div>
              <div class="order_number">
                <span class="number1"><span class="fangda">{{detailsObject.newIntegral}}</span>积分</span>
                <span class="number2">￥{{detailsObject.originalIntegral}}</span>
              </div>
            </div>
            <div class="linese">
              <div class="linese_left">
                <i class="iconfont icon-riqi"></i> 有效期
              </div>
              <div class="linese_right">{{detailsObject.newTime}} 至 {{detailsObject.oldTime}}</div>
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
      <div class="confirm_wrap">
        <span class="confirm_btn" :class="{active:detailsObject.status}">{{detailsObject.status?'马上兑换':'已兑换'}}</span>
      </div>
    </div>
    <div class="loading" v-else>
      <img src="../../images/loading.gif">
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { getActivityDetail } from 'src/service/getData'

export default {
  //数据
  data() {
    return {
      detailsObject: {}, //商品详情信息
    }
  },
  //创建前
  beforeCreate() {

  },
  //创建完毕状态
  created() {
    this.id = this.$route.query.id;
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
      if (!this.id) {
        alert('参数有误')
        return
      }
      //获取数据
      let res = await getActivityDetail(this.id);
      this.detailsObject = res.data
      console.log(res)
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.activityDetail_container {
  padding-bottom: 1.6rem;
}

.activityDetail_wrap {}

.loading {
  background-color: #efefef;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  img{
    @include center();
    width: 2rem;
  }
}


.activity_top {
  .activity_top_wrap {
    background-color: #fff;
    margin-bottom: .18rem;
    img {
      width: 100%;
      height: 3.5rem;
    }
    .content {
      padding: .2rem;
      .order_name_box {
        .name {
          font-weight: 600;
          font-size: .34rem;
        }
        .order_number {
          padding-bottom: .2rem;
          border-bottom: solid .025rem #ccc;
          .number1 {
            color: $fontC;
            .fangda {
              color: $fontC;
              font-size: .44rem;
              margin-right: .08rem;
            }
          }
          .number2 {
            color: $fontA;
            text-decoration: line-through;
          }
        }
      }

      .linese {
        @include fj;
        padding: .15rem 0 0 0;
        .linese_left {
          color: $fontB;
        }
        .linese_right {
          color: $fontB;
        }
      }
    }
  }
}


.activity_content {
  background-color: #fff;
  margin-bottom: .18rem;
  padding: .2rem;
  color: #10202f;
  .title {
    font-size: .3rem;
    font-weight: 600;
    margin-bottom: .18rem;
  }
  .title2 {
    margin-bottom: .05rem;
  }
  .describe {
    margin-bottom: .18rem;
  }
  .text_list {
    line-height: .44rem;
    list-style-type: decimal;
    padding-left: .31rem;
    &.text_listOne {
      color: #6e767c;
    }
    a {
      color: #5871e1;
      text-decoration: underline;
    }
  }
}


.confirm_wrap {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: .2rem;
  text-align: center;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
}

.confirm_btn {
  display: inline-block;
  width: 5.9rem;
  height: .9rem;
  line-height: .9rem;
  color: #fff;
  border-radius: .4rem;
  background-color: $fontA;
  &.active {
    background-color: $fontD;
  }
}

</style>
