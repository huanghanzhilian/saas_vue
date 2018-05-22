import {
  SET_TITLE,
  KEEP_USERINFO,
  SET_IFVIPOPEN,
  SET_GLOBAL_MSG
} from './mutation-types.js'

import { setStore, getStore } from '../config/mUtils'
import { localapi, proapi } from 'src/config/env'

export default {
  //请求错误提示
  [SET_GLOBAL_MSG](state, msg) {
    state.globalMsg = msg;
  },
  //修改页标题
  [SET_TITLE](state, title) {
    state.title = title;
  },
  //得到用户信息
  [KEEP_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
    //得到是否可以播放
    if(userInfo){
    	for (var io = 0; io < userInfo.permissions.length; io++) {
	      if (userInfo.permissions[io] == 1) {
	        state.isPlayOpen = true;
	        break;
	      }
	      state.isPlayOpen = false;
	    }
      for (let io = 0; io < userInfo.permissions.length; io++) {
        if (userInfo.permissions[io] == 2) {
          state.permissions = 1;
          break;
        }else if(userInfo.permissions[io]==3){
          state.permissions=1;
          break;
        }
        state.permissions = 0;
      }
    }
  },

}
