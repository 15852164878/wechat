// app.js
App({
  //应用第一次启动触发
  onLaunch() {
    wx.cloud.init({
      env:"shopping-1gvk49nc4fadb2a1"
    })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //应用 被用户看到
  onShow(){
console.log("onShow");
  },
  //应用 被隐藏
  onHide(){
    console.log("Hide");
  },
  //应用代码发生报错的时候
  onError(err){
    console.log(err);
  },
  //应用第一次启动，找不到入口界面
  onPageNotFound(){
    //不能跳转tarbbar 页面，  
   wx.navigateTo({
     url: '',
   })
  },
  globalData: {
    userInfo: null
  }
})
