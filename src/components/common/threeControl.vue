<template>
  <!-- 组件盒子 -->
  <div class="msiteCenterTopWrap">
    <div class="msiteCenterTopBox">
      <div class="msiteCenterItem msiteCenterLeft" v-if="threeObject.left">
        <router-link :to="{path: '/activityDetail', query:{id:item.id}}" tag="div" class="msiteCenterLeftBox" v-for="item in threeObject.left">
          <div class="msiteCenterLeft_title">
            <div class="name ellipsis">{{item.name}}</div>
            <div class="describe ellipsis">{{item.describe}}</div>
          </div>
          <div class="imgBox">
            <img :src="item.roadcastImg" alt="">
          </div>
        </router-link>
      </div>
      <div class="msiteCenterItem msiteCenterRight" v-if="threeObject.right">
        <router-link :to="{path: '/activityDetail', query:{id:item.id}}" tag="div" class="right_item right_top" v-for="item in threeObject.right">
          <div class="right_title">
            <div class="name ellipsis">{{item.name}}</div>
            <div class="describe ellipsis">{{item.describe}}</div>
          </div>
          <div class="imgBox">
            <img :src="item.roadcastImg" alt="">
          </div>
        </router-link>
        
      </div>
    </div>
  </div>
</template>
<script>
//引入存储
//import { setStore, getStore } from '@/config/mUtils'
import { threeColumn } from 'src/service/getData'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'


export default {
  //数据
  data() {
    return {
      threeObject: {}, //轮播数据
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
      await threeColumn().then(res => {
        this.threeObject = res.data;
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

/*中间不规则布局 s*/

.msiteCenterTopWrap {
  width: 100%;
  background-color: #fff;
  margin-bottom: .15rem;
}

.msiteCenterTopBox {
  width: 100%;
  display: flex;
  .name {
    font-size: .3rem;
    /*font-weight: 600;*/
    margin-bottom: .1rem;
    width: 1.2rem;
  }
  .describe {
    font-size: .2rem;
    width: 1.2rem;
    color: #929292;
  }
  .msiteCenterItem {
    border-right: solid .025rem #e7e7e7;
    flex: 1,
  }

  .msiteCenterLeft {
    .msiteCenterLeftBox {
      flex: 1;
      display: flex;
      padding: .18rem;
    }

    display: flex;
    .msiteCenterLeft_title {
      flex: 1;
    }

    .imgBox {
      width: 2.1rem;
      height: 2.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .msiteCenterRight {
    display: flex;
    flex-direction: column;
    border-right: none;

    .right_item {
      flex: 1;
      display: flex;
      border-bottom: solid .025rem #e7e7e7;
      padding: .1rem .2rem;
      .right_title {
        flex: 1;
      }
      &:last-child {
        border-bottom: none;
      }
      .imgBox {
        margin-left: .1rem;
        width: 1.56rem;
        height: 1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}


/*中间不规则布局 e*/
</style>
