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
      username:"admin",
      password:"admin",
      Token:null,
      address:"天府新区新经济产业园区D区A1号楼",
      userPhone: '177****2233',
      goodsCate:[
        {
          id:1,
          name:"零食百味",
          goodsList:[
            {
              id:1,
              goods_id:101,
              goods_name:"百事薯片",
              goods_price:10,
              goods_inventory:100,
              goods_des:"口味随机",
              pic:"https://s1.ax1x.com/2020/07/07/UACmSx.jpg"
            },
            {
              id:1,
              goods_id:102,
              goods_name:"卫龙辣条",
              goods_price:5,
              goods_inventory:99,
              goods_des:"童年的味道",
              pic:"https://s1.ax1x.com/2020/07/07/UACnl6.jpg"
            },
            {
              id:1,
              goods_id:103,
              goods_name:"奥利奥",
              goods_price:7,
              goods_inventory:200,
              goods_des:"经典草莓口味",
              pic:"https://s1.ax1x.com/2020/07/07/UACKOO.jpg"
            },
            {
              id:1,
              goods_id:104,
              goods_name:"益达口香糖",
              goods_price:7,
              goods_inventory:200,
              goods_des:"经典薄荷口味",
              pic:"https://s1.ax1x.com/2020/07/08/UVZQJO.jpg"
            },
            {
              id:1,
              goods_id:105,
              goods_name:"港荣蒸蛋糕",
              goods_price:28,
              goods_inventory:20,
              goods_des:"小小面包",
              pic:"https://s1.ax1x.com/2020/07/08/UVZ3Se.jpg"
            },
            {
              id:1,
              goods_id:106,
              goods_name:"泡椒凤爪",
              goods_price:12,
              goods_inventory:30,
              goods_des:"香辣爽脆",
              pic:"https://s1.ax1x.com/2020/07/08/UVZJOA.jpg"
            },
          ]
        },
        {
          id:2,
          name:"方便速食",
          goodsList:[
            {
              id:2,
              goods_id:201,
              goods_name:"海底捞小火锅",
              goods_price:40,
              goods_inventory:2,
              goods_des:"正宗四川口味",
              pic:"https://s1.ax1x.com/2020/07/07/UAC1TH.jpg"
            },
            {
              id:2,
              goods_id:202,
              goods_name:"康帅傅",
              goods_price:5,
              goods_inventory:99,
              goods_des:"即刻享受美味",
              pic:"https://s1.ax1x.com/2020/07/07/UACEk9.jpg"
            },
            {
              id:2,
              goods_id:203,
              goods_name:"鸡腿饭",
              goods_price:28,
              goods_inventory:20,
              goods_des:"超级大鸡腿",
              pic:"https://s1.ax1x.com/2020/07/07/UACFw4.jpg"
            },
            {
              id:2,
              goods_id:204,
              goods_name:"Q趣",
              goods_price:28,
              goods_inventory:70,
              goods_des:"泡面一绝",
              pic:"https://s1.ax1x.com/2020/07/08/UVZlWD.jpg"
            },
            {
              id:2,
              goods_id:205,
              goods_name:"光友粉丝",
              goods_price:5,
              goods_inventory:120,
              goods_des:"6666",
              pic:"https://s1.ax1x.com/2020/07/08/UVZ8QH.jpg"
            },
            {
              id:2,
              goods_id:206,
              goods_name:"火鸡面",
              goods_price:5,
              goods_inventory:66,
              goods_des:"韩国超辣火鸡面",
              pic:"https://s1.ax1x.com/2020/07/08/UVZGyd.jpg"
            },

          ]
        },
        {
          id:3,
          name:"饮料果汁",
          goodsList:[
            {
              id:3,
              goods_id:301,
              goods_name:"零度可乐",
              goods_price:3,
              goods_inventory:60,
              goods_des:"无糖更畅快",
              pic:"https://s1.ax1x.com/2020/07/07/UACimF.jpg"
            },
            {
              id:3,
              goods_id:302,
              goods_name:"汇源果汁",
              goods_price:3,
              goods_inventory:99,
              goods_des:"健康美味",
              pic:"https://s1.ax1x.com/2020/07/07/UACVYR.jpg"
            },
            {
              id:3,
              goods_id:303,
              goods_name:"营养快线",
              goods_price:4,
              goods_inventory:30,
              goods_des:"即刻补充体力",
              pic:"https://s1.ax1x.com/2020/07/07/UACl0e.jpg"
            }
          ]
        },
        {
          id:4,
          name:"家居日用",
          goodsList:[
            {
              id:4,
              goods_id:401,
              goods_name:"洁柔纸巾",
              goods_price:3,
              goods_inventory:60,
              goods_des:"中等规格",
              pic:"https://s1.ax1x.com/2020/07/07/UACQmD.jpg"
            },
            {
              id:4,
              goods_id:402,
              goods_name:"洁丽雅毛巾",
              goods_price:15,
              goods_inventory:99,
              goods_des:"洁丽雅",
              pic:"https://s1.ax1x.com/2020/07/07/UACZf1.jpg"
            },
            {
              id:4,
              goods_id:403,
              goods_name:"垃圾桶",
              goods_price:12,
              goods_inventory:30,
              goods_des:"大容量",
              pic:"https://s1.ax1x.com/2020/07/07/UACCOU.jpg"
            }
          ]
        },


      ],
      // 订单列表
      orderList: [{
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 14:00:01',
        list: [
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '纸巾',
            price: 3,
            counts: 3,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          },
          {
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
          },
        ]
      },
      {
        username: '王老五',
        id:'2',
        stauts: 1,
        dateTime: '2020-07-07 15:00:01',
        list: [
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
          },
          {
            name: '洁柔纸巾',
            price: '3',
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          }
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 16:00:01',
        list: [
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '纸巾',
            price: 3,
            counts: 3,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          },
          {
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
          }
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 17:02:01',
        list: [
          {
            name: '洁柔纸巾',
            price: 3,
            counts: 3,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          },
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
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
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
          },
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '洁柔纸巾',
            price: '3',
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          }
        ]
      },
      {
        username: '王老五',
        id:'1',
        stauts: 0,
        dateTime: '2020-07-07 19:00:01',
        list: [
          {
            name: '百事薯片',
            price: 10,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACmSx.jpg'
          },
          {
            name: '零度可乐',
            price: 3,
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACimF.jpg'
          },
          {
            name: '鸡腿饭',
            price: '20',
            counts: 1,
            pic: 'https://s1.ax1x.com/2020/07/07/UACFw4.jpg'
          },
          {
            name: '洁柔纸巾',
            price: '3',
            counts: 2,
            pic: 'https://s1.ax1x.com/2020/07/07/UACQmD.jpg'
          }
        ]
      },
    ]
    }
  }
})
