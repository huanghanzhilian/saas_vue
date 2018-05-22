import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import axios from 'axios'
//import xhrOverwrite from 'xhr-overwrite';
import util from './util'
import store from './store/'
import { routerMode } from './config/env'
import { getUserInfo ,getNoticeListsss} from './service/getData'
import './config/rem'
import FastClick from 'fastclick'
import 'src/style/fontsr.css'





if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(util);
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
});




// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     console.log(1)
//     // if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//     //   config.headers.Authorization = `${store.state.token}`;
//     // }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );
/*
//respone拦截器
axios.interceptors.response.use(
  response => {
    //console.log(response.data.code)
    if(response.data.code!=0){
      //console.log(response.data.code)
      store.commit('SET_GLOBAL_MSG', response.data.msg);
      
      //return;
    }
    return response;
  },
  error => { //默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      console.log(error.response)
    }
    return Promise.reject(error.response);
  }
);*/







new Vue({
  router,
  store,
}).$mount('#app')
