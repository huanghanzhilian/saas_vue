import App from '../App'

const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite'); //首页
const exchangeList = r => require.ensure([], () => r(require('../page/exchangeList/exchangeList')), 'exchangeList'); //历史记录页面
const list = r => require.ensure([], () => r(require('../page/list/list')), 'list'); //搜索以及列表页面
const orderDetail = r => require.ensure([], () => r(require('../page/orderDetail/orderDetail')), 'orderDetail'); //订单详情页面
const activityDetail = r => require.ensure([], () => r(require('../page/activityDetail/activityDetail')), 'activityDetail'); //活动详情页面

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    //二级路由。对应App.vue
    //地址为空时跳转msite页面
    // {
    //     path: '/',
    //     redirect: '/'
    // },
    //首页
    {
      path: '/',
      name: 'msite',
      component: msite,
      meta: {
        keepAlive: true,
        title: '拉卡拉-积分购'
      },
    },
    //兑换列表页
    {
      path: '/exchangeList',
      name: 'exchangeList',
      component: exchangeList,
      meta: {
        title: '兑换记录'
      },
    },
    //搜索以及列表页面
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        title: '积分购列表'
      },
    },
    //订单详情页面
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail,
      meta: {
        title: '积分购状态'
      },
    },
    //活动详情页面
    {
      path: '/activityDetail',
      name: 'activityDetail',
      component: activityDetail,
      meta: {
        title: '积分购详情'
      },
    },
  ]
}]