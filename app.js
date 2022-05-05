// app.js
App({
  globalData: {
    navHeight: 0,
      capsuleTop:0
  },
  onLaunch() {
    var dwObj = wx.getMenuButtonBoundingClientRect();
    var navHeight_ = (dwObj.top + dwObj.height);
    var capsuleTop_ = dwObj.top;
    this.capsuleTop = capsuleTop_;
    this.navHeight = navHeight_;
  }
})