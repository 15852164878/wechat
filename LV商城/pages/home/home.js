const DB=wx.cloud.database().collection("list")
// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
   bag:[
     {
       src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/45NBuzDIW489QBoVep5mcfTYRR9bqyWr0rwCxtXgOT8V4UX7sFMvqgYx4e.k97lOiFprRCUd3lcQRuRE7ILFZ1*spOCedH9pJfJ58DKI9ew!/b&bo=qwHdAasB3QEDFzI!&rf=viewer_4',
      title:'TRIO 双肩包',
      price:'¥26,300'
   },
   {
    src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/ruAMsa53pVQWN7FLK88i5glShcyp643TDkHqRQoXsDfypbe2A8IVEo50*a5W0V.bQEPIW0DbHXHFifdHJChY1K.7DSX3I8PW.xd15NzKinQ!/mnull&bo=VQPMAlUDzAIDByI!&rf=photolist&t=5',
   title:'TRUNK WALLET 手袋',
   price:'¥18,700'
},
{
  src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/ruAMsa53pVQWN7FLK88i5lPjsi5E*Cw*MMJtS6OQui6*AfC*vpZoChnqcxi2R54Ukv3Qvru1j2xzCw6QpS5gc*56GFfH6mEFTmzUpDSRyk4!/mnull&bo=vgPWAr4D1gIDByI!&rf=photolist&t=5',
 title:'DISCOVERY 腰包',
 price:'¥17,800'
},
{
  src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/ruAMsa53pVQWN7FLK88i5vUCexorsb4Oy6Y6429ULivY6Qzut45EUzHBX5mpvPm.NPdANRe4NfGVuanDS55FO69kzpGTdwRn8jwx75TllB0!/mnull&bo=cQJ2AnECdgIDByI!&rf=photolist&t=5',
 title:'NEVERFULL 中号手袋',
 price:'¥16,100'
},
{
  src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/ruAMsa53pVQWN7FLK88i5vUCexorsb4Oy6Y6429ULiuq6VxNcRRTWyRGp1o6AIDxgEf0lBOm4XjPvRtaSbZQJ91vw0*lm3sq04HVeg3ENUU!/mnull&bo=RQMQAkUDEAIDByI!&rf=photolist&t=5',
 title:'海滩手拿包',
 price:'¥9,400'
},
{
  src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/ruAMsa53pVQWN7FLK88i5vUCexorsb4Oy6Y6429ULiuku0QaTM14W52vrK5.IloNWa*W5eAOO0Jqd2QIhVuR91qQ22C7t68FgtMmfRowAhE!/mnull&bo=qwLkAqsC5AIDByI!&rf=photolist&t=5',
 title:'MULTI ACCESSORIES 手袋',
 price:'¥17,200'
}
  
  ],
    swiper:[
      {
    // one:' "PRE-COLLECTION 2021"',
    //  two:'2021早春男士系列',
     src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/45NBuzDIW489QBoVep5mcbxOk8dExKpyi*4BJXRfa4otvMDxq*pWZNhUU2.7ot6PmtBFQErCTldZeis4dt0Tkzc3jSgRtgprQA682ZQJ1nQ!/b&bo=KQIgAykCIAMBFzA!&rf=viewer_4'
    },
    {
      // one:'"GIFTS FOR HER"',
      // two:'为她甄选',
      src:'http://m.qpic.cn/psc?/V54MMYON20rrLC4GY5iy4fIGam2npxeZ/45NBuzDIW489QBoVep5mcbxOk8dExKpyi*4BJXRfa4otvMDxq*pWZNhUU2.7ot6PmtBFQErCTldZeis4dt0Tkzc3jSgRtgprQA682ZQJ1nQ!/b&bo=KQIgAykCIAMBFzA!&rf=viewer_4'
    }
    ]
   
  },
  imageLoad: function(e) {
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  //  wx.request({
  //    url: '',
  //     success:(result)=>{
  //       console.log(result); 
  //     }
  //   })
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

  },


    
})

