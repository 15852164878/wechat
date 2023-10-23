const DB=wx.cloud.database().collection("list")
let name=""
let age=" "
let id=" "
// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:""

  },
cs(){
  wx.navigateToMiniProgram({
    appId: 'wx98c4901082ccbef2c',
    path: 'page/index/index?id=123',
    extraData: {
      foo: 'bar'
    },
    envVersion: 'develop',
    success(res) {
      // 打开成功
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
  wx.getUserInfo({
    success: function(res) {
     console.log(res.userInfo.nickName)
         that.setData({
             name: res.userInfo.nickName
           
       })
    
    }
  })
   },
  //  auth:function(e){
  //     var userInfo=JSON.stringify(e.detail.userInfo);
  //     console.log(userInfo);
  //     this.setData({
  //       userInfo:e.detail.userInfo
  //     })
  //  wx.showLoading({
  //    title: '登录中。。',
  //  })
  //  wx.login({
  //   success (res) {
  //     if (res.code) {
  //       //发起网络请求
  //       wx.request({
  //         url: ' https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
  //         data: {
  //           code: res.code
  //         }
  //       })
  //     } else {
  //       console.log('登录失败！' + res.errMsg)
  //     }
  //   }
  // })
  // },
  // bindGetUserInfo:function(){
  //   wx.showLoading({
  //     title: '登陆中.....',
  //   })
  //   /* 加载时间跳转*/
  //   setTimeout(function () {
  //     wx.hideLoading()
  //     wx.switchTab({
  //       url: '/pages/home/home',
  //     })
  //   }, 10000)
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

  },

})