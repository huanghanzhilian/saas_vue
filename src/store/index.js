import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	title:'SAMURED',
	userInfo:null,//用户登入后信息
    isPlayOpen:false,//是否可以播放
    globalMsg:'',//请求错误提示
    permissions:0,//权限
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})