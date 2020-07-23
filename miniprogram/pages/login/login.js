// pages/login/login.js
import { login, showToast } from "../../util/asyncWx";
import {myrequest} from "../../request/myrequest"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
  },
//   async handleGetUserInfo(e){
//     const {code}= await login();
//     const { encryptedData, rawData, iv, signature } = e.detail;
//     let messages ={
//       code:code,
//       encryptedData:encryptedData,
//       rawData:rawData,
//       iv:iv,
//       signature:signature
//     }
//     const res=  await myrequest({url:"/user/login",data:messages,method:"post"})
//     console.log(res);
//     const returnInfo =res.data;
//     if(returnInfo.code===0){
//       showToast("登录失败，请稍后再试");
//     }
//     else{
//        let userInfo = e.detail.userInfo;
//        console.log(userInfo);
//        userInfo.wallet=returnInfo.msg.wallet;
//        userInfo.userId=returnInfo.msg.userId;
//        app.globalData.Token=returnInfo.msg.uuid;
//        wx.setStorageSync('userInfo', userInfo);
//       //  wx.switchTab({
//       //    url: '../index/index',
//       //  });
//       console.log(app.globalData.Token);
//        wx.navigateBack({
//          delta: 1
//        });
         
//     }
      
//  },
  /**
   * 生命周期函数--监听页面加载
   */
  login(){
     if(this.data.username==app.globalData.username && this.data.password==app.globalData.password)
     {
      app.globalData.Token="登录页面测试";
       wx.navigateBack({
         delta: 1
       });
         
     }
     else
     {
       wx.showToast({
         title:"账号或密码输入错误",
         icon:"none"
       })
     }
  },
  bindUsernameInput(e){
    let username= e.detail.value
    this.setData({
      username:username
    });
  },
  bindpasswordInput(e){
    let password = e.detail.value;
    this.setData({
      password:password
    })
  },
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