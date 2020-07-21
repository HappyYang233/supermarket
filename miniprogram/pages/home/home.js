// miniprogram/pages/goods/goods.js
import {checkLogin} from "../../util/comom"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    swiperPic: [],
    noteText: '【温馨提醒】各位顾客，天投物业A区小超市决定每周五为中信延长营业时间至19：00，让大家有更充裕的时间去选购商品，欢迎大家踊跃提供意见。',
    gridContent: [
      {
        name: "零食百味",
        icon: 'coupon-o',
      },
      {
        name: '方便速食',
        icon: 'gift-card-o',
      },
      {
        name: '饮料果汁',
        icon: 'bulb-o',
      },
      {
        name: '家居日用',
        icon: 'hotel-o',
      },
      {
        name: '历史订单',
        icon: 'notes-o',
      },
      {
        name: '我的信息',
        icon: 'user-circle-o',
      },
    ]
  },
 
  getSwiperPic() {
      this.setData({
        swiperPic: [
          {
            name: 1,
            url: 'https://s1.ax1x.com/2020/07/20/U4g8YV.png'
          },
          {
            name: 2,
            url: 'https://s1.ax1x.com/2020/07/20/U4g3F0.png'
          },
          {
            name: 3,
            url: 'https://s1.ax1x.com/2020/07/20/U4gloq.png'
          },
          
        ]
      })
  },
  jumpToShop() {
    console.log(123)
    wx.switchTab({
      url: '../goods/goods'
    })
  },
  onLoad: function (options) {
    this.getSwiperPic()
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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