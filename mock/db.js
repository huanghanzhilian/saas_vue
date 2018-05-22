// db.js
var Mock = require('mockjs');

module.exports = {
  getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  }),
  //php模拟数据
  play: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": []
  }),

  //轮播图
  api_roadcast: Mock.mock({
    "code": 0,
    "msg": "success",
    "data|6": [{
      "roadcastUrl": "http://baidu.com",
      "roadcastImg": "@IMG(750x328,@color())"
    }]
  }),


  //首页三栏布局数据
  api_threecolumn: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "left": [{
        "name": "@csentence(3, 5)",
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "roadcastImg": "@IMG(300x160,@color())"
      }],
      "right|2": [{
        "name": "@csentence(3, 5)",
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "roadcastImg": "@IMG(300x160,@color())"
      }]
    }
  }),

  //首页展示列表
  api_order_list: Mock.mock({
    "code": 0,
    "msg": "success",
    "data|20": [{
      "describe": "@cparagraph(1, 3)",
      "id": "@id",
      "roadcastImg": "@IMG(300x160,@color())",
      "goldcoin": "@natural(0, 100)"
    }]
  }),

  //积分记录
  api_exchange_list: Mock.mock({
    "code": 0,
    "msg": "success",
    "data": {
      "pageAmount": 114,
      "pageNow": 1,
      "pageSize": 8,
      "recordAmount": 911,
      "row|12": [{
        "describe": "@cparagraph(1, 3)",
        "id": "@id",
        "time":"@datetime()",
        "roadcastImg": "@IMG(300x160,@color())",
        "goldcoin": "@natural(0, 100)",
        "status":"@boolean"
      }]
    }
  }),


};
