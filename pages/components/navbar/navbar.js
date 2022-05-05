// pages/testQ/index.js
 const app = getApp()
Component({
  methods:{
    logIn:function(){
      wx.reLaunch({
        url: '/pages/user/user',
      })
    },
    kb:function(){
      wx.reLaunch({
        url: '/pages/demo/demo',
      })
    }

  },

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,
      capsuleTop:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navHeight: app.navHeight,
      capsuleTop:app.capsuleTop
     })
  },
  lifetimes:{
    // 组件进入页面的时候开始加载
    attached:function(){
      this.setData({
        navHeight: app.navHeight,
        capsuleTop:app.capsuleTop
       })
    }
  }

})