// pages/orderlist/orderlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    allOrderLists:[],
    status: ['待发货', '配送中','已完成'],
    tagTypeX: ['primary','warning','success']
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
    const rawOrderLists = [
      {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 14:00:01',
        price:'22.0',
        status:0,
      },
      {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 15:00:01',
        price:'665.1',
        status:1,
      },  {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 16:00:01',
        price:'85.7',
        status:1,
      },  {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 17:02:01',
        price:'10.0',
        status:2,
      },  {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 18:00:01',
        price:'23.0',
        status:2,
      },  {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 19:00:01',
        price:'78.6',
        status:0,
      },  {
        fristPic: '../../images/orderlist/taocan.jpg',
        dateTime: '2020-07-07 19:30:22',
        price:'123.0',
        status:1,
      },
    ]
    this.setData({
      allOrderLists: rawOrderLists
    })
  },
  getActive(){
    const app  = getApp();
    let active = app.globalData.orderListActive;
    if(active==null)
      return 0;
    else
      return active;
  },
  onShow: function () {
    let active = this.getActive();
    wx.nextTick(() => {
      this.setData({ activePage:active }) // 在当前同步流程结束后，下一个时间片执行
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
    this.getAllorderLists()
   
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