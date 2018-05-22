<template>
  <header id='head_top'>
    <section class="head_goback" v-if="goBack" @click="oplsiwo">
      <span class="iconfont icon-shangyiyehoutuifanhui go_back"></span>
    </section>
    <form class="search_form">
      <input v-focus="focusStatus" type="search" name="search" placeholder="搜索SAMURED" class="search_input" v-model="searchValue" @input="checkInput">
      <input type="submit" value="搜索" name="submit" class="search_submit" @click.prevent="searchTarget('')">
    </form>
  </header>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { imgBaseUrl } from '../../config/env'
export default {
  data() {
    return {
      searchValue: '', // 搜索内容
      imgBaseUrl, // 图片域名地址
      emptyResult: false, // 搜索结果为空时显示
      isSearchShow: false, //是否显示搜索
      qId: null, //初始化搜索文字
      focusStatus: false,
      isShowLeft: false, //是否打开侧边栏
    }
  },
  created() {
    this.qId = this.$route.query.q;
  },
  mounted() {
    //获取用户信息
    //this.getUserInfo();

  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    ...mapState([
      'title'
    ]),
  },
  directives: {
    focus: {
      inserted: function(el, { value }) {
        //console.log(value)
        // if(value){
        //     console.log(el)
        //     el.focus();
        // }
      },
      update: function(el, { value }) {
        if (value) {
          el.focus();
        }
        // el.addEventListener('click', () => {
        //     alert(1)
        // }, false)
      }
    }
  },
  methods: {
    ...mapActions([
      'SET_TITLE'
    ]),

    //执行搜索
    searchTarget(historyValue) {
      if (historyValue) {
        //this.searchValue = historyValue;
      } else if (!this.searchValue) {
        return
      }
      this.$router.push('/huntfor?q=' + this.searchValue);
    },

    //搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
    checkInput() {
      if (this.searchValue === '') {
        //this.showHistory = true; //显示历史记录
        //this.restaurantList = []; //清空搜索结果
        //this.emptyResult = false; //隐藏搜索为空提示
      }
    },

    //如果有code返回两步
    oplsiwo() {
      if (history.length == 1) {
        this.$router.push('/')
      } else {
        if (this.$route.query.code) {
          this.$router.push('/')
        } else {
          //console.log(this.$route)
          this.$router.go(-1)
        }
      }


    },
  },
  //监听
  watch: {
    '$route' (to, from) {
      // if (to.path != '/huntfor') {
      //   this.searchValue = '';
      // }
    },

  }
}

</script>
<style lang="scss" scoped>
@import '../../style/mixin';

#head_top {
  background-color: $topbg;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  line-height: .96rem;
  display: flex;
  @include wh(100%, 0.96rem);
  .head_goback {
    width: .96rem;
    height: 100%;
    text-align: center;
    .go_back {
      font-size: .38rem;
    }
  }
  .search_form {
    flex:1;
    display: flex;
    align-items: center;
    .search_input {
      flex-grow: 1;
      height: .5rem;
      outline: none;
      font-size: 15px;
      line-height: .5rem;
      margin: 0;
      outline-width: 0;
      border: 0;
      padding: 2px 0 0 5px;
    }
    .search_submit {
      width: 1rem;
      height: .5rem;
      display: block;
      margin-right: .2rem;
      margin-left:.2rem;
      background: #c33;
      color: #fff;
    }
  }
}

</style>
