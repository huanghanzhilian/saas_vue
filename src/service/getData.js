import http from './public'


//首页轮播图
export const roadcastList = () => {
  return http.fetchGet('/api/roadcast')
};

//首页三栏布局数据
export const threeColumn = () => {
  return http.fetchGet('/api/threecolumn')
};

//首页展示列表
export const indexOrderList = () => {
  return http.fetchGet('/api/order/list')
};

//积分记录
export const getExchangeList = (pageNum, pageSize) => {
  return http.fetchGet('/api/exchange/list',{ pageNum, pageSize })
};






//播放历史记录
export const historicalList = (pageNum, pageSize) => {
  return http.fetchGet('/api/history/list', { pageNum, pageSize })
};


//测试
// export const isExistsss = () => {
//   return http.fetchGet('/api/channel/info',{
//     userId:17
//   })
// }


/*// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/users/updateheadimage', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/goods/productHome', params)
}*/
