<template>
  <header id='head_top' :class="{'logins':logins}">
    <section  class="head_goback" v-if="goBack" @click="oplsiwo">
      <span class="iconfont icon-shangyiyehoutuifanhui go_back" :class="{'goBackcolor':goBackcolor}"></span>
    </section>
    <section class="title_head ellipsis">
      <span class="title_text ellipsis">{{headTitle}}</span>
    </section>
  </header>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {getStore} from 'src/config/mUtils'
  export default {
    data(){
      return{
        keyword:''

      }
    },
    mounted(){
      //console.log($)
      //获取用户信息
      //this.getUserInfo();
      //console.log(getStore('userId'))
      //console.log(this.userId)

    },
    props: ['signinUp', 'headTitle', 'goBack','goBackcolor','search','logins','isactive'],
    computed: {
      ...mapState([
        'userId'
      ]),
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      //如果有code返回两步
      oplsiwo(){
        if(history.length==1){
          this.$router.push('/')
        }else{
          if(this.$route.query.code){
            this.$router.push('/')
          }else{
            //console.log(this.$route)
            this.$router.go(-1)
          }
        }


      },
      startSearch(){
        this.$emit('startSearch',this.keyword);
      },

      keyboardHide(){
        this.$emit('startSearch',this.keyword);
      },

    },

  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  #head_top{
    background-color: $topbg;
    position: fixed;
    padding: 0 .16rem;
    z-index: 100;
    left: 0;
    top: 0;
    line-height: .96rem;
    @include wh(100%, 0.96rem);
  }
  #head_top.logins{
    background-color: transparent;
  }
  .go_back{
    @include center;
    font-size:.57rem;
    //display: inline-block;
    &.goBackcolor{
      color:#fff;
    }
  }
  .head_goback{
    position: relative;
    @include wh(0.6rem, .96rem);
    line-height: .96rem;
    //margin-left: .2rem;
    /*vertical-align: middle;*/
  }
  .head_login{
    right: 0.55rem;
    @include sc(0.65rem, #fff);
    @include ct;
    .login_span{
      color: #fff;
    }
    .user_avatar{
      fill: #fff;
      @include wh(.8rem, .8rem);
    }
  }
  .title_head{
    @include center;
    width: 50%;
    height: .96rem;
    line-height: .96rem;
    color: #fff;
    text-align: center;
    .title_text{
      @include sc(.32rem, #c1c1c1);
      font-weight: 400;
      @include center;
      width: 100%;
      &.active{
        //@include cl;
      }
    }
  }

  .shocart_item{
    right: .75rem;
    @include wh(0.6rem, 1rem);
    line-height: 1.25rem;
    @include sc(0.5rem, #fff);
    @include ct;

    font-size:.9rem;
  }
  .shocart_items{
    right: .75rem;
    @include wh(0.6rem, 1rem);
    line-height: 1.25rem;
    @include sc(0.5rem, #fff);
    @include ct;
    font-size:.9rem;
  }
  .shocart_itemss{
    right: 2.5rem;
    @include wh(0.6rem, 1rem);
    line-height: 1.25rem;
    @include sc(0.5rem, #fff);
    //@include ct;
    font-size:.9rem;
    position: absolute;
    top: .5rem;
  }

  .search-input{
    width:11.8rem;
    left:.55rem;
    @include ct;
    height:1.12rem;
    .search_item{
      box-sizing: border-box;
      padding:0 1rem;
      width:100%;
      height:100%;
      display:block;
      border-radius: 4px;
      color:#8e8e93;
      background:rgba(0,0,0,0.08);
    }
    span{
      position: absolute;
      top:0;
      font-size:.6rem;
      @include ct;
      left:.2rem;
    }
  }

  .right_edit{
    position: absolute;
    top: 0;
    z-index: 100;
    width: 60px;
    text-align: center;
    right: 0;
    line-height: 1.95rem;
    font-size:.6rem;
  }

</style>
