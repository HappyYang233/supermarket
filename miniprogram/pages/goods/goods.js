// miniprogram/pages/goods/goods.js
import {
  checkLogin
} from "../../util/comom"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchStr: '',
    goodDetailShow: false,
    buyResult: [],
    shopCartLists: {},
    CartListShow: false,
    selectIndex: 0,
    allGoodsLists: [],
    snack: [],
    convience: [],
    drink: [],
    necessity: [],
    goodsListOrder: [],
    leftMenuList: [
      //   {
      //   id: 0,
      //   name: '全部'
      // }, 
      {
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
      }
    ],
    rightContent: [],
    allGoodsListsRaw: [],
    pickedGoodDeatil: {},
  },
  tapForGoods(e) {
    this.setData({
        pickedGoodDeatil: e.currentTarget.dataset.item
      },
      () => {
        this.setData({
          goodDetailShow: true
        })
      }
    )

    //     goods_des: "童年的味道"
    // goods_id: 102
    // goods_inventory: 99
    // goods_name: "卫龙辣条"
    // goods_price: 5
    // id: 1
    // pic: "https://s1.ax1x.com/2020/07/07/UACnl6.jpg"
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
  searchAction() {
    if (this.data.searchStr) {
      const searchStr = this.data.searchStr
      const tempList = this.data.allGoodsLists

      tempList.forEach((ele, idx) => {
        let tempItem = []
        ele.goodsList.forEach((item, index) => {

          if (item.goods_name.indexOf(searchStr) != -1) {

            tempItem.push(ele.goodsList[index])
          }
        })
        tempList[idx].goodsList = tempItem
      })
      this.setData({
        allGoodsLists: tempList
      })
    } else {

      const temp = this.data.allGoodsListsRaw
      this.setData({
        allGoodsLists: JSON.parse(JSON.stringify(this.data.allGoodsListsRaw))
      })
    }

  },
  inputOnChange(e) {
    //  goods_name
    if (e.detail) {

      this.setData({
        searchStr: e.detail
      })
    } else {
      this.setData({
        allGoodsLists: JSON.parse(JSON.stringify(this.data.allGoodsListsRaw))
      })
    }


  },
  onPageChange(event) {
    this.setData({
      selectIndex: event.detail,
      active_index: event.detail
    })
  },
  // 列表中添加商品
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
  // 弹窗添加商品
  DialogAddGood(e) {
    
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
        this.readAllGoods(res.data[0].goodsCate)
        this.setData({
          allGoodsLists: res.data[0].goodsCate,
          allGoodsListsRaw: JSON.parse(JSON.stringify(res.data[0].goodsCate))
        })
      }
    })
  },
  readAllGoods(appData) {
    const tempList = []
    appData.forEach(element => {
      element.goodsList.forEach(ele => {
        tempList.push(ele)
      })
    })
    this.setData({
      goodsListOrder: tempList
    })
    // 获取各个区域的高度
    wx.nextTick(() => {
      this.computeAllHeight()
    })
  },
  computeAllHeight() {
    const _this = this
    var query = wx.createSelectorQuery();
    query.selectAll('.index-name').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {

      res[0].forEach(rect => {

        let key = 'allGoodsListsRaw[' + rect.dataset.id + '].top'
        _this.setData({
          [key]: rect.top - 109 // 上方搜索栏100
        })
      })

      _this.setData({
        allGoodsLists: JSON.parse(JSON.stringify(_this.data.allGoodsListsRaw))
      })
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


    const listRaw = JSON.parse(JSON.stringify(this.data.shopCartLists.goods))
    listRaw.forEach((ele, index) => {
      if (ele.goods_id == id) {
        ele.counts++
        ele.sum += ele.goods_price
      } else {
        return
      }
    })
    wx.setStorageSync('shopCart', listRaw);
    this.getShopCart()
  },
  handlePay() {
    if (!checkLogin()) {
      //跳转登录页面
      wx.navigateTo({
        url: '../login/login',
        success: (result) => {

        },
        fail: () => {},
        complete: () => {}
      });

    } else {
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
  scroll(e) {
    this.data.allGoodsLists.some((v, k) => {
      if (v.top <= e.detail.scrollTop) {
        if (this.data.allGoodsLists[k + 1] && this.data.allGoodsLists[k + 1].top > e.detail.scrollTop) {
          this.setData({
            selectIndex: k
          });
          return true;
        }
      }
    })
  },


  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      const app = getApp();
      let cateActiveId= app.globalData.cateActiveId;
      if(cateActiveId!=null)
      {
        this.setData({
          //id从1开始的所以要-1
          selectIndex: cateActiveId-1,
          active_index: cateActiveId-1
        });
        app.globalData.cateActiveId=null;
      }
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