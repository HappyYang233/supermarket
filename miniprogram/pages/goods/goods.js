// miniprogram/pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0,
    allGoodsLists: [],
    snack: [],
    convience: [],
    drink: [],
    necessity: [],
    leftMenuList: [{
      "id": 1,
      "name": "零食百味"
    }, {
      "id": 2,
      "name": "方便速食"
    }, {
      "id": 3,
      "name": "饮料果汁"
    }, {
      id: 4,
      name: '家居日用'
    }],
    rightContent: [{
        goodsName: "德芙巧克力",
        desc: "纵享丝滑",
        price: 5,
        goodsImageUrl: "",
        id: 1
      }
    ]
  },
  handleShowCar() {
    wx.navigateTo({
      url: '../car/car',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },
  onPageChange(event) {
    this.setData({
      currentPage: event.detail
    })
  },
  getAllGoods() {
    const appData = getApp().globalData.goodsCate;
    this.setData({
      allGoodsLists: appData
    })
    this.setData({
      rightContent: appData[0].goodsList
    })
    // console.log(appData)
    appData.forEach(element => {
      switch (element.id) {
        case 1:
          this.setData({
            snack: element.goodsList
          })
          break;
        case 2:
          this.setData({
            convience: element.goodsList
          })
          break;
        case 3:
          this.setData({
            drink: element.goodsList
          })
          break;
        case 4:
          this.setData({
            necessity: element.goodsList
          })
          break;
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllGoods()
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