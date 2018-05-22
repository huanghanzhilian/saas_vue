<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/'})" :class="['guide_item',{active :$route.name=='msite'}]">
            <span class="icon_styles iconfont icon-shouye"></span>
            <span>首页</span>
        </section>
        <!-- <section @click = "gotoAddress({path: '/lookChannel'})" :class="['guide_item',{active :$route.name=='lookChannel'}]">
            <span class="icon_styles iconfont icon-pindao"></span>
            <span>频道</span>
        </section> -->
        <section @click = "gotoAddress({path: '/subscribe'})" :class="['guide_item',{active :$route.name=='subscribe'}]">
            <span class="icon_styles iconfont icon-dingyue"></span>
            <span>订阅</span>
        </section>
        <section @click = "gotoAddress({path: '/profile'})" :class="['guide_item',{active :$route.name=='profile'}]">
            <!-- noticeAmount -->
            <span v-if="userInfo">
              <span v-if="userInfo.noticeAmount" class="PushNotifications-count">{{userInfo.noticeAmount}}</span>
            </span>
            
            <span class="icon_styles iconfont icon-wode"></span>
            <span>我的</span>
        </section>
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        created(){
           //console.log(this.$route)
           //console.log(this.shareId)
           //console.log(this.userInfo)
        },
        mounted(){
            //console.log(this.$route.name)
        },
        computed: {
            ...mapState([
                'login','shareId','userId','userInfo'
            ]),
        },
        methods: {
            gotoAddress(path){
                /*console.log(path.path)
                if(path.path=='/profile'){
                    alert(1)
                }*/
                this.$router.push(path)

            }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #foot_guide{
        background-color: #212121;
        position: fixed;
        border-top: 0.025rem solid #383838;
        z-index: 12;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 0.96rem);
        display: flex;
        box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
    }
    .guide_item{
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        .icon_style{
            @include wh(.8rem, .8rem);
            margin-bottom: .2rem;
            margin-top: .3rem;
            fill: #828282;
        }
        .icon_styles{
            margin-bottom: .04rem;
            margin-top: .08rem;
            fill: #ccc;
            font-size:.4rem;
            color: #828282;
        }
        &.active span{
            color: #e34849;
        }
        span{
            font-size:.24rem;
            color: #818181;
        }
    }
    .PushNotifications-count {
        position: absolute;
        bottom: 60%;
        left: 50%;
        padding: 0 4px;
        color: #fff !important;
        background-color: #f1403c;
        border: 0.025rem solid #fff;
        line-height: .24rem !important;
        text-align: center;
        border-radius: 20px;
    }
</style>
