export const returnLogin=function(){

    wx.showModal({
        title: '提示',
        content: '会话过期，请重登录',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if (result.confirm) {
            wx.reLaunch({
              url: '../login/login',
              success: (result) => {
                let app =  getApp();
                app.globalData.sessionId=null;
                wx.clearStorageSync();                
              },
              fail: () => {},
              complete: () => {}
            });
          }
        },
        fail: () => {},
        complete: () => {}
      });
    
     
  }