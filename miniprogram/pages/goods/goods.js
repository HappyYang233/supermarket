// miniprogram/pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCartLists:{},
    CartListShow: false,
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
    rightContent: []
  },
  handleShowCar() {
    // wx.navigateTo({
    //   url: '../car/car',
    //   success: (result) => {

    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
  },
  onPageChange(event) {
    this.setData({
      currentPage: event.detail
    })
  },
  onAddGood(e) {
    let pickedGood = e.currentTarget.dataset.pickedgood
    pickedGood.counts = 1
    pickedGood.sum = pickedGood.goods_price
    let pickedgoodid = pickedGood.goods_id
    let cart = wx.getStorageSync("shopCart") || [];
    let hasGood = false
    let goodindex = -1
    cart.forEach((item, index) => {
      if (pickedgoodid == item.goods_id) {
        hasGood = true
        goodindex = index
      }
    })
    if (hasGood) {
      cart[goodindex].counts += 1
      cart[goodindex].sum += pickedGood.goods_price
    } else {
      cart.push(pickedGood)
    }
    wx.setStorageSync('shopCart', cart);
    this.getShopCart()
  },
  getShopCart() {
    let shopcart = wx.getStorageSync("shopCart") || []
    let len = shopcart.length
    let sumPrice = 0
    shopcart.forEach(ele=> {
      sumPrice += ele.sum
    })
    let shopCartRes = {
      sumPrice,
      length: len,
      goods:shopcart
    }
    this.setData({
      shopCartLists:shopCartRes
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
  onCartClick() {
    this.setData({
      CartListShow: true
    })
  },
  onCartListClose() {
    this.setData({
      CartListShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllGoods()
    this.getShopCart()
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