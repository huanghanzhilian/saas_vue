<template>
  <!-- 组件盒子 -->
  <div class="recommend_container" v-if="videoListArr">
    <ul class="" v-if="videoListArr.length">
      <router-link :to="{path: '/watch', query:{videoId:item.id,shareId}}" tag='li' class="videolist_li" v-for="item in videoListArr">
        <div class="videolist_info_wrap">
          <section class="videplist_img_wrap">
            <img :src="imgBaseUrl+item.cover" @error="imgError($event)" class="videolist_img" alt="">
            <div class="play_time">{{formatDuring(item.duration)}}</div>
          </section>
          <hgroup class="videolist_right">
            <header class="video_detail_header">
              <h4 class="video_title ellipsis">{{item.name}} {{item.sourceName}}</h4>
            </header>
            <h5 class="video_detail_title_wrap">
              <p class="video_detail_title">{{item.user.name}}</p>
            </h5>
            <h5 class="video_describe_wrap">
              <p class="video_describe">
                <!-- <span>{{item.youTubeId}}</span> -->
                <span>{{item.watchAmount}}次观看</span>
                <span>{{timeCycle(item.publishTime)}}</span>
              </p>
            </h5>
          </hgroup>
        </div>
      </router-link>
    </ul>
    <p v-else class="empty_data">暂无推荐</p>
  </div>
</template>
<script>
import { recommendList } from 'src/service/getData'
import { imgBaseUrl } from 'src/config/env'
import { loadMore, getImgPath } from './mixin'
import { mapMutations, mapState } from 'vuex'
export default {
  //数据
  data() {
    return {
      shareId:'',//用户分享id
      imgBaseUrl,
      touchend: false, //没有更多数据
    }
  },
  //开始创建  vue后自动执行
  mounted() {
    if(this.userInfo){
      this.shareId=this.userInfo.id
    }
    //this.initData();
  },
  //需要使用的模块
  components: {

  },
  //父组件的参数书
  props: ['videoListArr'],

  //需要引用的外部js方法
  mixins: [loadMore, getImgPath],

  //计算值 这里可以实时监听某个数据的变化
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },
  updated() {
    // console.log(this.supportIds, this.sortByType)
  },
  //方法
  methods: {

  },
  //监听
  watch: {
    // video_id(){
    //     //this.initData();
    // }
  }
}

</script>
<style lang="scss" scoped>
@import 'src/style/mixin'; //初始化页面背景动画
//加载动画
.animation_opactiy {
  padding: 90px 0 120px;
  text-align: center;
}

//加载动画end
//没有更多
.empty_data {
  @include sc(0.24rem, #666);
  text-align: center;
  line-height: 1rem;
}

//没有更多end
.videolist_container {
  font-size: .28rem;
  background-color: #212121;
  color: #fff;
}

.videolist_li {
  /*padding: .1rem .1rem 0 .1rem;*/
  .videolist_info_wrap {
    padding: .20rem .10rem .15rem .10rem;
    display: flex;
    /*border-bottom: 0.025rem solid #f1f1f1;*/
    /*padding: 0.7rem 0.4rem;*/
    .videplist_img_wrap {
      position: relative;
      .play_time {
        position: absolute;
        background: rgba(0, 0, 0, .6);
        color: #fff;
        font-size: .24rem;
        right: .28rem;
        bottom: .12rem;
        padding: 0 .1rem;
        /*border: 0.025rem solid #373637;*/
      }
    }
    .videolist_img {
      @include wh(2.84rem, 1.4rem);
      display: block;
      margin-right: 0.2rem;
      /*border-radius: 50%;*/
      background: url(../../images/img-video-default.jpg) no-repeat center center;
      background-size: 100%;
    }

    .videolist_right {
      flex: auto;
    }

    .video_title {
      line-height: .45rem;
      font-size: .24rem;
      color: #868486;
      width: 4rem;
    }

    .video_detail_title_wrap {
      .video_detail_title {
        line-height: .35rem;
        font-size: .28rem;
      }
    }

    .video_describe_wrap {
      margin-top: .05rem;
      color: #555456;

      .video_describe {
        color: #555456;
        line-height: .3rem;
        font-size: .24rem;

        span {
          color: #555456;
        }
      }
    }
  }
}

</style>
