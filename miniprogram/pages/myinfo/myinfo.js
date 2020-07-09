//index.js
import {checkLogin} from "../../util/comom"
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    userName:'',
    logged: false,
    takeSession: false,
    requestResult: '',
    addressShow:false,
    address:'',
    tempAddress:'',
    thisPageISshow: true
  },
  onShow(){
    if(app.globalData.Token!=null){
      let userInfo= wx.getStorageSync('userInfo');
      let imageUrl=userInfo.avatarUrl;
      let userName=userInfo.nickName;
      this.setData({
        thisPageISshow:true,
        avatarUrl:imageUrl,
        userName:userName
      })
    }
  },
  onTabItemTap(item) {
    console.log(123)
    let self = this;
    if (!checkLogin()) {
      console.log('xxx')
      this.setData({
        thisPageISshow: false
      })
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
    } else {
      this.setData({
        thisPageISshow: true
      })
    }

  },
  onLoad: function() {
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
    let address = app.globalData.address;
    this.setData({
      address:address,
    })
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  handleToOrder(e){
    let {status} = e.currentTarget.dataset;
    console.log("enter"+status);
    const app = getApp();
    app.globalData.orderListActive=status;
    wx.switchTab({
      url: '../orderlist/orderlist',
    });
  },
  handleAddressDailog(e){
      this.setData({
        addressShow:true
      })
  },
  onClose(){
    this.setData({
      addressShow:false
    })
  },
  handleEditAddress(e){
    console.log(2);
      let address = this.data.tempAddress;

      console.log(address);
      app.globalData.address=address;
      this.setData({
        address:address,
        tempAddress:''
      });
  },
  bindName(e){
    console.log(11111);
    let tempAddress= e.detail.value;
    this.setData({
      tempAddress:tempAddress
    })
  }

})
