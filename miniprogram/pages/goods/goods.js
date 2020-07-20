// miniprogram/pages/goods/goods.js
import {checkLogin} from "../../util/comom"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyResult: [],
    shopCartLists: {},
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
  onBuyChange() {},
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
    shopcart.forEach(ele => {
      sumPrice += ele.sum
    })
    let shopCartRes = {
      sumPrice,
      length: len,
      goods: shopcart
    }
    this.setData({
      shopCartLists: shopCartRes
    })
  },
  getAllGoods() {
    const db = wx.cloud.database()
    db.collection("goods").get({
      // res.data[0].goodsCate
      success: res => {
        console.log(res.data[0].goodsCate)
        this.readAllGoods(res.data[0].goodsCate)
        this.setData({
          allGoodsLists: res.data[0].goodsCate
        })
      }
    })
  },
  readAllGoods(appData) {
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
  downCounts(e) {
    let id = e.currentTarget.dataset.downcounts
    console.log(this.data.shopCartLists.goods)

    const listRaw = JSON.parse(JSON.stringify(this.data.shopCartLists.goods))
    listRaw.forEach((ele, index) => {
      if (ele.goods_id == id && ele.counts > 1) {
        ele.counts--
        ele.sum -= ele.goods_price
      } else if (ele.goods_id == id && ele.counts == 1) {
        listRaw.splice(index, 1)
        ele.sum = 0
      } else {
        return
      }
    })
    wx.setStorageSync('shopCart', listRaw);
    this.getShopCart()
  },
  upCounts(e) {
    let id = e.currentTarget.dataset.upcounts
    console.log(this.data.shopCartLists.goods)

    const listRaw = JSON.parse(JSON.stringify(this.data.shopCartLists.goods))
    listRaw.forEach((ele, index) => {
      if (ele.goods_id == id) {
        ele.counts++
        ele.sum += ele.goods_price
      }  else {
        return
      }
    })
    wx.setStorageSync('shopCart', listRaw);
    this.getShopCart()
  },
  handlePay(){
     if(!checkLogin()){
       //跳转登录页面
      wx.navigateTo({
         url: '../login/login',
         success: (result) => {
           
         },
         fail: () => {},
         complete: () => {}
       });
         
     }
     else
     {
       wx.navigateTo({
         url: '../pay/pay',
         success: (result) => {
           
         },
         fail: () => {},
         complete: () => {}
       });
         
       //继续流程
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllGoods()
    this.getShopCart()

  },
  // onTabItemTap(item) {
  //   let self = this
  //   console.log(1123);

  //   if (!checkLogin()) {
  //     wx.showModal({
  //       title: '提示',
  //       content: '账号尚未登录，请先登录账号',
  //       success: res => {
  //         if (res.confirm) {
  //           wx.navigateTo({
  //             url: '../login/login'
  //           })
  //         } else if (res.cancel) {
  //           wx.reLaunch({
  //             url: '../goods/goods'
  //           })
  //         }
  //       }
  //     })
  //   }
  // },
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