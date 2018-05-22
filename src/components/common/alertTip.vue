 <template>
    <div class="alet_container" @DOMMouseScroll="slaoak($event)" @mousewheel="slaoak($event)" @touchmove="slaoak($event)" @click="closecont">
	    <section class="tip_text_container">
            <!-- <div class="tip_icon">
                <span></span>
                <span></span>
            </div> -->
            <p class="tip_text">{{alertText}}</p>
            <div class="confrim" @click.stop="closeTip">{{btntxt||"确认"}}</div>
        </section>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText','btntxt'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            },
            //去除滚动事件
            slaoak(event){
              event.preventDefault()
            },
            closecont(){
                this.$emit('closecont')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
    	position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000000;
    }
    .tip_text_container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -2.3rem;
        margin-left: -2.3rem;
        width: 4.6rem;
        animation: tipMove .4s ;
        background-color: #2b2b2b;
        border: 1px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px;
        /*border-radius: 0.25rem;*/
        .tip_icon{
            @include wh(1rem, 1rem);
            border: 0.15rem solid #f8cb86;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            span:nth-of-type(1){
                @include wh(.12rem, 1.5rem);
                background-color: #f8cb86;
            }
            span:nth-of-type(2){
                @include wh(.1rem, .1rem);
                border: 1px;
                border-radius: 50%;
                margin-top: .2rem;
                background-color: #f8cb86;
            }
        }
        .tip_text{
            @include sc(.28rem, #fff);
            line-height: .9rem;
            text-align: center;
            margin-top: .2rem;
            padding: 0 .4rem;
        }
        .confrim{
            @include sc(.30rem, #353535);
            font-weight: bold;
            margin-top: .2rem;
            background-color: #e34849;
            width: 100%;
            text-align: center;
            line-height: .7rem;
            border: 1px;
            /*border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;*/
        }
    }
    
</style>
