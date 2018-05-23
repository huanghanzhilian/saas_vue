import http from './public'

//首页布局模块接口
export const getLayoutControl= () => {
  return http.fetchGet('/api/layout/control')
};

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
  return http.fetchGet('/api/exchange/list', { pageNum, pageSize })
};


//积分详情接口
export const getActivityDetail = (id) => {
  return http.fetchGet('/api/activity/detail', { id })
};


//商品列表以及搜索接口
export const getProductList = (pageNum, pageSize, key) => {
  return http.fetchGet('/api/product/list', { pageNum, pageSize, key })
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
