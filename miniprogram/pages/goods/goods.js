// miniprogram/pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[{"id":1,"name":"床上用品"},{"id":2,"name":"水果"},{"id":3,"name":"粮油"}],
    rightContent:[{
      goodsName:"德芙巧克力",
      desc:"纵享丝滑",
      price:5,
      goodsImageUrl:"",
      id:1

    },
    {
      goodsName:"德芙巧克力",
      desc:"纵享丝滑",
      price:5,
      goodsImageUrl:"",
      id:1

    }]
  },
  handleShowCar(){
    wx.navigateTo({
      url: '../car/car',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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