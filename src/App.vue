<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import headTop from 'src/components/header/head'
import alertTip from './components/common/alertTip'
export default {
  //数据
  data() {
    return {
      
    }
  },
  components: {

  },
  beforeCreate() {

  },
  created() {

  },
  //开始创建  vue后自动执行
  mounted() {

  },
  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'title', 'userInfo','globalMsg'
    ]),
  },
  //方法
  methods: {
    ...mapMutations([
      'SET_TITLE'
    ]),
    closeTip() {
      this.showAlert = false;
      this.alertText='';
      //this.$router.push("/signin")
    },
    closecont() {
      this.showAlert = false;
      this.alertText='';
    }
  },
  watch: {
    '$route' (to, from) {
      //console.log(to)
    },
    globalMsg(to, from){
      if(to){
        this.showAlert = true;
        this.alertText=to;
      }
    },
  }
}

</script>
<style lang="scss">
@import './style/common';
#app{
  height: 100%;
  width: 100%;
}

/*淡入激活
  淡入淡出
*/
/*.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  //display: none;
  opacity: 0;
}*/
.router-fade{
  /*position: absolute;left:0;right: 0;*/
}
.router-fade-enter-active {
  transition: all 1.2s ease;
}
.router-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.router-fade-enter, .router-fade-leave-to
{
  /*left:0;right: 0;*/
  /*transform: translateX(50px);*/
  opacity: 0;
}
</style>
