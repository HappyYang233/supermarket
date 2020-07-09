// pages/pay/pay.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    phone: '',
    cart:[],
    allPrice: 0,
    isShowDone: false
  },
  getAddress() {
    const address = getApp().globalData.address;
    const phone = getApp().globalData.userPhone;

    this.setData({
      address,
      phone
    })
  },
  getStorageCart() {
    let cart = wx.getStorageSync("shopCart") || [];
    let allPrice = 0;
    cart.forEach(ele => {
      allPrice+=ele.sum
      ele.counts = '×'+ele.counts
    })
    this.setData({
      cart
    })
    
    this.setData({
      allPrice
    })
  },
  handlePay(){
    this.setData({
      isShowDone: true
    })
  },
  onClose(){
    wx.setStorageSync('shopCart', []);
    // wx.switchTab({
    //   url: '../goods/goods',
    // })
    wx.reLaunch({
      url: '../goods/goods'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddress()
    this.getStorageCart()
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