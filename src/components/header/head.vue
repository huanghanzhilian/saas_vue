<template>
  <header id='head_top'>
    <section class="head_menuBtn" @click="isShowLeftOpen()">
      <span class="iconfont icon-zhankai go_back"></span>
    </section>
    <!-- <h1 class="title_head">{{title}}</h1> -->
    <section class="title_head ellipsis">
      <span class="title_text">{{title}}</span>
    </section>
    <router-link :to="{path: '/huntfor'}" tag='div' class="header_r">
      <span class="iconfont icon-sousuo go_back"></span>
    </router-link>
    <!-- <router-link :to="{path: '/'}" tag='div' class="head_login">
      <span @click="isSearchShow=false" class="head_login_img"></span>
    </router-link> -->
    <!-- <div class="link_search">
      <button class="return" @click="search">
        <span class="search_img"></span>
      </button>
    </div>
    <h1 class="page_title">{{title}}</h1>
    <div class="searchzd" v-show="isSearchShow">
      <div class="slspwo">
        <form class="search_form">
          <input v-focus="focusStatus" type="search" name="search" placeholder="搜索SAMURED" class="search_input" v-model="searchValue" @input="checkInput">
          <input type="submit" value="" name="submit" class="search_submit" @click.prevent="searchTarget('')">
        </form>
      </div>
    </div>
    <transition name="fade">
      <div class="screen_cover" v-show="isSearchShow" @click="toggleDialogue" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)"></div>
    </transition> -->
    <transition name="fade">
      <div class="screen_cover" v-show="isShowLeft" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)" @click="isShowLeft = false"></div>
    </transition>
    <transition name="fadeLeftBox">
      <div class="LeftBoxWrap" v-show="isShowLeft" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)">
        <div class="LeftBoxWrap_top">
          <div class="top_wrap">
            <span class="iconfont icon-zhankai top_icon"></span>
            <p class="top_title">分类</p>
          </div>
        </div>
        <div class="flsoe_wrap">
          <ul class="fadeLeftBox_list" @click="isShowLeft = false">
            <!-- <li class="fadeLeftBox_item"><i class="iconfont icon-home kist_item_icon"></i>首页</li> -->
            <router-link :to="{path: '/'}" tag='li' class="fadeLeftBox_item">
              <i class="iconfont icon-home kist_item_icon"></i>首页
            </router-link>
            <router-link :to="{path: '/borderlands'}" tag='li' class="fadeLeftBox_item">
              <i class="iconfont icon-weibiaoti1 kist_item_icon"></i>BORDERLANDS
            </router-link>
            <router-link :to="{path: '/information'}" tag='li' class="fadeLeftBox_item">
              <i class="iconfont icon-zixun kist_item_icon"></i>资讯
            </router-link>
            <router-link :to="{path: '/movie'}" tag='li' class="fadeLeftBox_item">
              <i class="iconfont icon-dianying kist_item_icon"></i>电影
            </router-link>
            <router-link :to="{path: '/drama'}" tag='li' class="fadeLeftBox_item">
              <i class="iconfont icon-weibiaoti-- kist_item_icon"></i>剧集
            </router-link>
          </ul>
        </div>
      </div>
    </transition>
    <!-- 分享对话end -->
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
    //开取侧边栏
    isShowLeftOpen() {
      this.isShowLeft = true;
    },
    searchTarget(historyValue) {
      if (historyValue) {
        //this.searchValue = historyValue;
      } else if (!this.searchValue) {
        return
      }
      this.toggleDialogue();
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
    //搜索
    search() {
      this.isSearchShow = true;
      this.focusStatus = true;
    },
    //去除滚动事件
    removeRoll(event) {
      event.preventDefault()
    },
    //对话框是否显示
    toggleDialogue() {
      this.isSearchShow = !this.isSearchShow;
      this.focusStatus = false;
    },
  },
  //监听
  watch: {
    '$route' (to, from) {
      if (to.path != '/huntfor') {
        this.searchValue = '';
      }
      // this.video_id = this.$route.query.id;
      // console.log(this.video_id)
      // this.initData();
      //location.reload();
      //this.searchValue='';
    },

  }
}

</script>
<style lang="scss" scoped>
@import '../../style/mixin';


/*蒙版 s */

.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .6);
  z-index: 1111;
}


/*蒙版 e */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}



/*侧边栏s */

.fadeLeftBox-enter-active,
.fadeLeftBox-leave-active {
  //transition: opacity .5s;
  transition: all .3s;
      transform: translateY(0);
}

.fadeLeftBox-enter,
.fadeLeftBox-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}

.LeftBoxWrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  /*right: 0;*/
  width: 5.5rem;
  background-color:#212121;
  z-index: 1112;
  font-size: .30rem;
  .LeftBoxWrap_top{
    border-bottom: 0.025rem solid #383838;
    .top_wrap{
      padding:.55rem .2rem .1rem .2rem;
      display: flex;
      align-items: center;
      vertical-align: middle;
      line-height: .4rem;
      .top_icon{
        vertical-align: middle;
        font-size: .36rem;
        margin-right: .1rem;
        color:#e34849;
      }
      .top_title{
        vertical-align: middle;
        color:#e34849;
      }
    }
  }
  .flsoe_wrap{
    .fadeLeftBox_list{
      padding:.2rem;
      .fadeLeftBox_item{
        padding:.25rem 0;
        text-align: center;
        .kist_item_icon{
          font-size: .30rem;
          margin-right: .1rem;
        }
      }
    }
  }
}


/*侧边栏e */

.slspwo {
  padding-left: 2.5rem;
  padding-right: .2rem;
  height: 100%;
  .search_form {
    padding: 0;
    margin: 0;
    height: 100%;
    display: block;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .search_input {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
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
      background: url(../../images/search.png) center center no-repeat;
      background-size: .37rem;
      @include wh(1rem, .5rem);
      display: block;
    }
  }
}

.searchzd {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11110;
  width: 100%;
  height: 100%;
  background: #212121;
}



#head_top {
  background-color: $blue;
  position: fixed;
  z-index: 101110;
  left: 0;
  top: 0;
  @include wh(100%, .95rem);
  .head_menuBtn {
    @include ct;
    width: 0.6rem;
    height: 0.96rem;
    line-height: .96rem;
    left: .2rem;
    vertical-align: middle;
    .go_back {
      @include center;
      font-size: .45rem;
      &.goBackcolor {
        color: #fff;
      }
    }
  }
  .header_r {
    @include ct;
    width: 0.6rem;
    height: 0.96rem;
    line-height: .96rem;
    right: .2rem;
    .go_back {
      @include center;
      font-size: .45rem;
      &.goBackcolor {
        color: #fff;
      }
    }
  }
  .page_title {
    font-size: .26rem; //display: table-cell;
    height: .95rem; //vertical-align: middle;
  }
  .title_head {
    @include center;
    width: 50%;
    height: .95rem;
    line-height: .96rem;
    color: #fff;
    text-align: center;
    .title_text {
      @include sc(.32rem, #e34849);
      font-weight: 400;
      @include center;
    }
  }
}

.return {
  @include wh(.95rem, .95rem); //@include ct;
  float: right;
  background: transparent;

  .search_img {
    background: url(../../images/search.png) center center no-repeat;
    background-size: 100%;
    @include wh(.37rem, .5rem);
    display: block;
    margin: auto;
  }
}

.head_login {
  float: left;
  margin-right: 8px;
  padding-left: .2rem;
  height: 100%;
  position: relative;
  z-index: 11111;
  .head_login_img {
    @include wh(2rem, 100%);
    background: url(../../images/logo.png) center center no-repeat;
    background-size: 100%;
    display: block;
    margin: auto;
  }
}




.title_head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;

  .title_text {
    @include sc(0.32rem, #000);
    text-align: center;
    font-weight: bold;
  }
}

</style>
