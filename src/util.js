import { imgBaseUrl } from 'src/config/env'
export default {
  install(Vue, options) {
    //图片加载错误设置默认图片
    Vue.prototype.imgError = function(e) {
      var img = e.currentTarget;
      img.src = require('./images/img-video-default.jpg');
    }
    //图片加载错误设置默认icon
    Vue.prototype.imgErrorIcon = function(e) {
      var img = e.currentTarget;
      img.src = require('./images/head.jpg')
    }
    //大图
    Vue.prototype.imgErrorDatu = function(e) {
      var img = e.currentTarget;
      img.src = require('./images/datu.jpg')
    }
    // 时间转换
    Vue.prototype.formatDuring = function(mss) {
      mss = mss * 1000;
      var days = parseInt(mss / (1000 * 60 * 60 * 24));
      var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = (parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))) > 9 ? (parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))) : '0' + (parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = ((mss % (1000 * 60)) / 1000) > 9 ? (mss % (1000 * 60)) / 1000 : '0' + (mss % (1000 * 60)) / 1000;
      if (!mss) {
        return '0:00';
      } else {
        return (hours ? hours + ":" : "") + (minutes ? minutes + ":" : "") + (seconds ? seconds + "" : "");
      }
      //return days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
      //return (days ? days + "天" : "") + (hours ? hours + "小时" : "") + (minutes ? minutes + "分钟" : "") + (seconds ? seconds + "秒" : "");
      //return (days ? days + ":" : "") + (hours ? hours + ":" : "") + (minutes ? minutes + ":" : "") + (seconds ? seconds + "" : "");
    };

    //分享地址拼接
    Vue.prototype.share = function(op, obj) {
      var imageswe=obj.cover?imgBaseUrl + obj.cover:imgBaseUrl + obj.playlistCover;
      
      if (op == 'qq') {
        let p = {
          url: location.href,
          /*获取URL，可加上来自分享到QQ标识，方便统计*/
          desc: '',
          /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
          title: obj.name||obj.playlistName,
          /*分享标题(可选)*/
          summary: obj.summary||obj.playlistSummary,
          /*分享摘要(可选)*/
          pics: imageswe,
          /*分享图片(可选)*/
          flash: '',
          /*视频地址(可选)*/
          site: '',
          /*分享来源(可选) 如：QQ分享*/
          style: '201',
          width: 32,
          height: 32
        };
        let s = [];
        for (let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''));
        }
        window.open('http://connect.qq.com/widget/shareqq/index.html?' + s.join('&'))
      } else if (op == 'qzone') {
      //   console.log(obj)
      // return
        let p = {
          url: location.href,
          showcount: '1',
          /*是否显示分享总数,显示：'1'，不显示：'0' */
          desc: '',
          /*默认分享理由(可选)*/
          summary: obj.summary||obj.playlistSummary,
          /*分享摘要(可选)*/
          title: obj.name||obj.playlistName,
          /*分享标题(可选)*/
          site: '',
          /*分享来源 如：腾讯网(可选)*/
          pics: imageswe,
          /*分享图片的路径(可选)*/
          style: '203',
          width: 98,
          height: 22
        };
        let s = [];
        for (let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''));
        }
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + s.join('&'))
      } else if (op == "weibo") {
        let p = {
          url: location.href,
          type: '1',
          count: '1',
          /**是否显示分享数，1显示(可选)*/
          appkey: '',
          /**您申请的应用appkey,显示分享来源(可选)*/
          title: obj.name||obj.playlistName,
          pic: imageswe,
          /**分享图片的路径(可选)*/
        };
        let s = [];
        for (let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''));
        }
        window.open('http://service.weibo.com/share/share.php?' + s.join('&'))
      } else if (op == 'douban') {
        let p = {
          href: location.href,
          name: obj.name||obj.playlistName,
          image: imageswe,
          starid: 0,
          aid: 0,
          style: 11,
        };
        let s = [];
        for (let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''));
        }
        window.open('https://www.douban.com/share/service?' + s.join('&'))
      }

      //console.log('http://connect.qq.com/widget/shareqq/index.html?'+s.join('&'))
      //window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+s.join('&'))
    };
    // 时间转换
    Vue.prototype.timeCycle = function(time) {
      var result = '';
      var second = 1000;
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - (time * 1000);
      if (diffValue < 0) {
        return;
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      var secondC = diffValue / second;
      if (monthC >= 1) {
        result = "" + parseInt(monthC) + "个月前";
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else
        result = "" + parseInt(secondC) + "秒前";
      return result;
    };
  }
}
