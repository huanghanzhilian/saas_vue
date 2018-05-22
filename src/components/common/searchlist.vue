<template>
  <!-- 组件盒子 -->
  <div class="recommend_container">
    <div class="lenng_box" v-if="keyword">
      <div class="total_wrap">共{{totle}}个视频</div>
      <span class="iconfont icon-40 siast_item_icon" @click="isShowSXOpen()"></span>
    </div>
    <ul v-load-more="loaderMore" class="" v-if="videoListArr.length" type="1">
      <!-- <li class="videolist_li">
        <div class="souepo-wrap">
          <div class="videolist_info_wrap">
            <section class="videplist_img_wrap">
              <img class="videolist_img" alt="">
              <div class="play_timese">
                <div class="play_time_wrap">
                  <span>6</span>
                  <span class="icon_styles iconfont icon-gengduo"></span>
                </div>
              </div>
            </section>
            <hgroup class="videolist_right">
              <header class="video_detail_header">
                <h4 class="video_title line2sl">sss</h4>
              </header>
              <h5 class="video_detail_title_wrap">
                <p class="video_detail_title">sss</p>
              </h5>
              <h5 class="video_describe_wrap">
                <p class="video_describe">

                  <span>sss次观看</span>
                  <span>sss</span>
                </p>
              </h5>
            </hgroup>
          </div>
        </div>
      </li> -->
      <li class="videolist_li" v-for="item in videoListArr">
        <router-link :to="{path: '/watch', query:{videoId:item.id,shareId}}" tag='a' class="souepo-wrap" v-if="item.rowFlag==1">
          <div class="videolist_info_wrap">
            <section class="videplist_img_wrap">
              <img :src="imgBaseUrl+item.cover" @error="imgError($event)" class="videolist_img" alt="">
              <div class="play_time">{{formatDuring(item.duration)}}</div>
            </section>
            <hgroup class="videolist_right">
              <header class="video_detail_header">
                <h4 class="video_title line2sl">{{item.name}}</h4>
              </header>
              <h5 class="video_detail_title_wrap">
                <p class="video_detail_title" v-if="item.user">{{item.user.name}}</p>
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
        <router-link :to="{path: '/watchArt', query:{album:item.playlistId,shareId}}" tag='a' class="souepo-wrap" v-if="item.rowType==3">
          <div class="videolist_info_wrap">
            <section class="videplist_img_wrap">
              <img :src="imgBaseUrl+item.playlistCover" @error="imgError($event)" class="videolist_img" alt="">
              <div class="play_timese">
                <div class="play_time_wrap">
                  <span>{{item.videoAmount}}</span>
                  <span class="icon_styles iconfont icon-gengduo"></span>
                </div>
              </div>
            </section>
            <hgroup class="videolist_right">
              <!-- <header class="video_detail_header">
                <h4 class="video_title line2sl">{{item.playlistName}}</h4>
              </header> -->
              <h5 class="video_detail_title_wrap">
                <p class="video_detail_title ellipsis" style="width: 4rem;">{{item.playlistName}}</p>
              </h5>
              <h5 class="video_describe_wrap">
                <p class="video_describe">
                  <!-- <span>{{item.youTubeId}}</span> -->
                  <span>{{item.watchAmount}}次观看</span>
                  <span>{{timeCycle(item.playlistPublishTime)}}</span>
                </p>
              </h5>
            </hgroup>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <div v-if="!videoListArr.length&&!isrequ" class="animation_opactiy">
            <div class="loading">
                <p class="loading_text">正在加载</p>
            </div>
        </div> -->
    <p v-if="videoLoading" class="empty_data">加载中...</p>
    <p v-show="!isrequ" v-if="touchend" class="empty_data">没有更多了</p>
    <p v-if="touchend&&isrequ" class="empty_data">没有数据</p>
    <transition name="fade">
      <!-- <div class="screen_cover" v-show="isShowsaixuan" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)" @touchmove="removeRoll($event)" @click="isShowsaixuan = false"></div> -->
      <div class="screen_cover" v-show="isShowsaixuan" @DOMMouseScroll="removeRoll($event)" @mousewheel="removeRoll($event)">
        <div class="fudom_top">
          <div class="fudom_top_l" @click="isShowsaixuan = false">
            <i class="iconfont icon-cuohao siast_item_icon"></i>
          </div>
          <div class="fudom_top_c">过滤条件</div>
          <div class="fudom_top_r" @click="initDatasaixuan()">
            <i class="iconfont icon-duigou siast_item_icon"></i>
          </div>
        </div>
        <div class="slpe_wrap">
          <div class="saixuan_wrap" v-for="(item,index) in sialArrayData">
            <div class="saixuan_title">{{item.value}}</div>
            <ul class="saixuan_list clear">
              <li class="saixuan_item" v-for="(citem,cindex) in item.data" :class="{active :citem.status=='1'}" @click="filterBtn(index,citem,cindex)">{{citem.value}}</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { searchList,searchgetMovieTypeTab,searchgetMovieyearsTab,searchgetMoviepublishtimeTab } from 'src/service/getData'
import { imgBaseUrl } from 'src/config/env'
import { loadMore, getImgPath } from './mixin'
import { mapMutations, mapState } from 'vuex'
export default {
  //数据
  data() {
    return {
      shareId:'',//用户分享id
      isShowsaixuan: false, //是否赛选
      page: 1, //页数
      querySize: 8, //请求条数
      videoListArr: [], // 店铺列表数据
      imgBaseUrl,
      touchend: false, //没有更多数据
      videoLoading: false, //显示加载动画
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
      isrequ: false,

      totle:"",
      sortArr: [{
        "id": 100,
        "parentId": 0,
        "value": "  排序依据",
        "key": "4_1_011"
      }, {
        "id": 2000,
        "parentId": 100,
        "value": "播放量",
        "key": 100
      }, {
        "id": 2001,
        "parentId": 100,
        "value": "发布时间",
        "key": 101
      }],
      sialArrayData: [],
      pingtaiIndex:[],
      option:{
        sort:"",
        type:"",
        country:"",
        years:"",
        publishTime:""
      }
    }
  },
  //开始创建  vue后自动执行
  mounted() {
    if(this.userInfo){
      this.shareId=this.userInfo.id
    }
    this.initData();
  },
  //需要使用的模块
  components: {

  },
  //父组件的参数书
  props: ['keyword'],

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
    async initData() {
      //获取赛选数据
      
      let rese = await searchgetMovieTypeTab();
      let ress = await searchgetMovieyearsTab();
      let resss = await searchgetMoviepublishtimeTab();
      this.category = rese.data;
      this.category = [...this.category, ...ress.data];
      this.category = [...this.category, ...resss.data];
      this.category = [...this.category, ...this.sortArr];

      var category1 = [];
      for (var i = 0, k = this.category; i < k.length; i++) {
        if (k[i].parentId == 0 && (k[i].key == '3_11_0'|| k[i].key == '7_102_0'|| k[i].key == '9_121_0'|| k[i].key == '4_1_011')) {
          var box = k[i];
          box.data = []
          var ndata = {
            "status": 1,
            "value": "全部",
            "parentId": k[i].id,
            "key": ''
          }
          box.data.push(ndata)
          for (var e = 0, j = this.category; e < j.length; e++) {
            if (box.id == j[e].parentId) {
              //j[e].status = 0;
              box.data.push(j[e])
            }
          }
          category1.push(box);
        }
      }
      this.sialArrayData = category1;
      //获取数据
      let res = await searchList(this.keyword,this.page, this.querySize, this.option.sort, this.option.type, this.option.years,this.option.publishTime);
      this.videoListArr = [...res.data.rows];
      this.totle = res.data.recordAmount;
      if (res.data.rows.length == 0) {
        this.isrequ = true;
      } else {
        this.isrequ = false;
      }

      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
      }
      //console.log(this.isrequ)
      //console.log(this.touchend)
    },
    //到达底部加载更多数据
    async loaderMore() {
      if (this.touchend) {
        return
      }
      //防止重复请求
      if (this.preventRepeatReuqest) {
        return
      }
      this.videoLoading = true;
      this.preventRepeatReuqest = true;

      //数据的定位加20位
      this.page += 1;
      let res = await searchList(this.keyword, this.page, this.querySize);
      this.hideLoading();
      this.videoListArr = [...this.videoListArr, ...res.data.rows];
      this.totle = res.data.recordAmount;
      // if (res.data.rows.length == 0) {
      //   this.isrequ = true;
      // } else {
      //   this.isrequ = false;
      // }
      //当获取数据小于20，说明没有更多数据，不需要再次请求数据
      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
        return
      }
      this.preventRepeatReuqest = false;
    },
    //开发环境与编译环境loading隐藏方式不同
    hideLoading() {
      this.videoLoading = false;
    },

    //开取赛选
    isShowSXOpen() {
      this.isShowsaixuan = true;
    },
    //执行赛选
    async initDatasaixuan() {
      var option = {};
      for (var i = 0; i < this.sialArrayData.length; i++) {
        if (this.sialArrayData[i].id == 11) {
          for (let c = 0; c < this.sialArrayData[i].data.length; c++) {
            if (this.sialArrayData[i].data[c].status) {
              this.option.type = this.sialArrayData[i].data[c].key;
            }
          }
        } else if (this.sialArrayData[i].id == 100) {
          for (let c = 0; c < this.sialArrayData[i].data.length; c++) {
            if (this.sialArrayData[i].data[c].status) {
              this.option.sort = this.sialArrayData[i].data[c].key;
            }
          }
        } else if (this.sialArrayData[i].id == 102) {
          for (let c = 0; c < this.sialArrayData[i].data.length; c++) {
            if (this.sialArrayData[i].data[c].status) {
              this.option.years = this.sialArrayData[i].data[c].key;
            }
          }
        }else if (this.sialArrayData[i].id == 121) {
          for (let c = 0; c < this.sialArrayData[i].data.length; c++) {
            if (this.sialArrayData[i].data[c].status) {
              this.option.publishTime = this.sialArrayData[i].data[c].key;
            }
          }
        }
      }
      this.page = 1;
      //获取数据
      let res = await searchList(this.keyword,this.page, this.querySize, this.option.sort, this.option.type, this.option.years,this.option.publishTime);
      this.videoListArr = [...res.data.rows];
      this.totle = res.data.recordAmount;
      //数据为空
      if (res.data.rows.length == 0) {
        this.isrequ = true;
      } else {
        this.isrequ = false;
      }

      if (res.data.pageAmount == res.data.pageNow) {
        this.touchend = true;
      }else {
        this.touchend = false;
      }



      this.isShowsaixuan = false;
    },
    //去除滚动事件
    removeRoll(event) {
      event.preventDefault()
    },
    //筛选多选方法
    filterBtn(s,o, w) {
      if (o.status) {
        return
      }
      for (var i = 0, k = this.sialArrayData; i < k.length; i++) {
        if (k[i].id == o.parentId) { //获取一级数组
          //var keyis='lanel'+k[i].id;
          var keyis = k[i].id; //获取url索引
          for (var j = 0, q = k[i].data; j < q.length; j++) { //混还二级数组
            q[j].status = 0; //二级数组状态初始化
            if (j == w) { //点击索引等于二级数组索引
              q[j].status = 1;
              this.$set(this.sialArrayData, s, k[i]);
              this.pingtaiIndex[keyis] = w.toString();
              //this.initDatasaixuan()
            }
          }
        }
      }
    },
  },
  //监听
  watch: {
    keyword(newvalue, before) {
      // console.log(newvalue)
      // console.log(before)
      this.page = 1;
      this.touchend = false;
      this.initData();
    }
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

.play_timese {
  width: .96rem;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: .24rem;
  right: .2rem;
  top: 0;
  bottom: .12rem;
  .play_time_wrap {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    @include center;
  }
}

.lenng_box {
  font-size: .28rem;
  display: flex;
  justify-content: space-between;
  padding: .2rem;
  border-bottom: 0.025rem solid #383838;
  border-top: 0.025rem solid #383838;
  color: #636363;
  .total_wrap {
    color: #636363;
  }
  .siast_item_icon {
    font-size: .3rem;
  }
}


/*蒙版 s */

.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #212121;
  padding-top: .95rem;
  z-index: 1111;
  overflow: auto;
  .fudom_top {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: .95rem;
    line-height: .95rem;
    font-size: .3rem;
    display: flex;
    background-color: #212121;
    border-bottom: 0.025rem solid #383838;
    .fudom_top_l {
      width: .95rem;
      text-align: center;
      .siast_item_icon {
        font-size: .3rem;
      }
    }
    .fudom_top_c {
      flex: 1;
      text-align: center;
    }
    .fudom_top_r {
      width: .95rem;
      text-align: center;
      .siast_item_icon {
        font-size: .3rem;
      }
    }
  }
  .saixuan_wrap {
    padding: .2rem;
    font-size: .28rem;
    .saixuan_title {
      color: #545454;
    }
    .saixuan_list {
      border-bottom: 0.025rem solid #383838;
      margin-top: .2rem;
      .saixuan_item {
        margin-right: .12rem;
        margin-bottom: .22rem;
        border: 0.025rem solid #383838;
        padding: .05rem .15rem;
        float: left;
        &.active {
          color: #e34849;
          border-color: #e34849;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}






/*蒙版 e */

</style>
