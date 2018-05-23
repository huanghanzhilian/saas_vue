<template>
  <div class="msite_container">
    <div class="msite_wrap" v-if="pageStatus">
      <sowing-control></sowing-control>
      <navtop-control></navtop-control>
      <!-- 中间不规则布局 s  -->
      <threeControl></threeControl>
      <!-- 中间不规则布局 e -->

      <!-- 商品列表 s -->
      <indexlist-control></indexlist-control>
      <!-- 商品列表 e -->
    </div>
    <div class="loading" v-else>
      <img src="../../images/loading.gif">
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import sowingControl from 'src/components/common/sowingControl'
import threeControl from 'src/components/common/threeControl'
import indexlistControl from 'src/components/common/indexlistControl'
import navtopControl from 'src/components/common/navtopControl'

import { getLayoutControl } from 'src/service/getData'


export default {
  //数据
  data() {
    return {
      pageStatus:false,
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
    sowingControl,
    threeControl,
    indexlistControl,
    navtopControl
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
      //获取布局数据
      await getLayoutControl().then(res => {
        this.pageStatus=true;
      })
    },
  },

  //监听
  watch: {

  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin';

.msite_container {
  flex: 1;
}

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








</style>
