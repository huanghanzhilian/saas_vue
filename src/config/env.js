/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式  hash   history
 * imgBaseUrl: 图片所在域名地址
 * history
 */

let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = 'http://static.samuredwonder.com/';
// let imgBaseUrl = 'http://p14wwtw7q.bkt.clouddn.com/';
//let imgBaseUrl = 'http://static.samured.com';

if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

	// baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
