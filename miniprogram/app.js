//app.js

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      // 订单列表
      orderList: [{
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 14:00:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 1,
        dateTime: '2020-07-07 15:00:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 16:00:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 17:02:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 18:00:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 19:00:01',
        list: [
          {
            name: '薯片',
            price: 12,
            counts: 2,
            pic: ''
          },
          {
            name: '可乐',
            price: 5,
            counts: 2,
            pic: ''
          },
          {
            name: '纸巾',
            price: 12,
            counts: 1,
            pic: ''
          },
          {
            name: '套餐盒饭',
            price: '32',
            counts: 1,
            pic: ''
          },
          {
            name: '水果拼盘',
            price: '12',
            counts: 2,
            pic: ''
          },
        ]
      },
    ]
    }
  }
})
