// pages/orderlist/orderlist.js
// const rawOrderLists = [
//   {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 14:00:01',
//     price:'22.0',
//     status:0,
//   },
//   {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 15:00:01',
//     price:'665.1',
//     status:1,
//   },  {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 16:00:01',
//     price:'85.7',
//     status:1,
//   },  {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 17:02:01',
//     price:'10.0',
//     status:2,
//   },  {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 18:00:01',
//     price:'23.0',
//     status:2,
//   },  {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 19:00:01',
//     price:'78.6',
//     status:0,
//   },  {
//     fristPic: '../../images/orderlist/taocan.jpg',
//     dateTime: '2020-07-07 19:30:22',
//     price:'123.0',
//     status:1,
//   },
// ]

const db = wx.cloud.database()
import {
  checkLogin
} from "../../util/comom"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activePage: 0,
    allOrderLists: [],
    status: ['','待发货', '配送中', '已完成','已取消'],
    tagTypeX: ['','primary', 'warning', 'success','danger'],
    thisPageISshow: true
  },

  tabOnChange(event) {
    wx.showToast({
      title: `切换到 ${event.detail.title}`,
      icon: 'none',
    });
    console.log(event)
  },

  // 获取所有的订单
  getAllorderLists() {
    db.collection('history').get({
      // res.data[0].goodsCate
      success: res => {
        // console.log(res)
        this.setData({
          allOrderLists: res.data
        })
      }
    })
    // this.setData({
    //   allOrderLists: rawOrderLists
    // })
  },
  getActive() {
    const app = getApp();
    let active = app.globalData.orderListActive;
    if (active == null)
      return 0;
    else
      return active;
  },
  onShow: function () {
    //判断Token
    if (app.globalData.Token != null) {
      this.setData({
        thisPageISshow: true
      })
    }
    let active = this.getActive();
    active = Number(active);
    this.setData({
      activePage: active
    })
    const pages = getCurrentPages()
    const perpage = pages[pages.length - 1]
    perpage.onLoad()
    // this.setData({
    //   activePage:active
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // if(!checkLogin()){
    //   //跳转登录页面
    //  wx.navigateTo({
    //     url: '../login/login',
    //     success: (result) => {

    //     },
    //     fail: () => {},
    //     complete: () => {}
    //   });

    // }
    // else{
    this.getAllorderLists()
    // }

  },
  onTabItemTap(item) {
    let self = this
    if (!checkLogin()) {
      this.setData({
        thisPageISshow: false
      });
      wx.showModal({
        title: '提示',
        content: '账号尚未登录，请先登录账号',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login'
            })
          } else if (res.cancel) {
            wx.reLaunch({
              url: '../goods/goods'
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})