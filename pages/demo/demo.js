// pages/demo.js
const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        swiperheight:0,
        index:0,
        show: false,
        high:0,
        list: [
            // 1行
            {},
            {},
            {
                "subject": "高级算法设计与分析",
                "classroom": "6B408",
            },
            {},
            {},
            {},
            {},
            // 2行
            {
                "subject": "软件体系结构与设计",
                "classroom": "6A308"
            },
            {
                "subject": "软件工程",
                "classroom": "6A306"
            },
            {
                "subject": "高级英语",
                "classroom": "E1B203"
            },
            {
                "subject": "Web应用开发技术基础",
                "classroom": "6A406"
            },
            {},
            {
                "subject": "软件体系结构与设计",
                "classroom": "6A308"
            },
            {},
            // 3行
            {
                "subject": "高级算法分析与设计",
                "classroom": "6B408"
            },
            {
                "subject": "数据库系统原理",
                "classroom": "6A408"
            },
            {},
            {
                "subject": "软件工程",
                "classroom": "6A406"
            },
            {
                "subject": "大学体育",
                "classroom": "TL05"
            },
            {
                "subject": "高级算法分析与设计",
                "classroom": "6B408"
            },
            {},
            // 4行
            {
                "subject": "复变函数与积分变换",
                "classroom": "6A109"
            },
            {
                "subject": "马克思主义基本原理",
                "classroom": "E2A102"
            },
            {},
            {
                "subject": "复变函数与积分变换",
                "classroom": "6A109"
            },
            {},
            {
                "subject": "复变函数与积分变换",
                "classroom": "6A109"
            },
            {},
            // 5行
            {},
            {
                "subject": "三维动画设计制作",
                "classroom": "E1A110"
            },
            {},
            {},
            {},
            {},
            {},
        ],
        time:[
            {
                date:28,
                weekday:'一'
            },
            {
                date:29,
                weekday:'二'
            },
            {
                date:30,
                weekday:'三'
            },
            {
                date:31,
                weekday:'四'
            },
            {
                date:1,
                weekday:'五'
            },
            {
                date:2,
                weekday:'六'
            },
            {
                date:3,
                weekday:'日'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //this.getData();
        wx.getSystemInfo({
          success: (result) => {
              this.setData({
                  "swiperheight":result.windowHeight,

              })
          },
        })
        this.setData({
            "high":app.navHeight
        })
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
    open: function (e) {
        this.setData({
            show: true,
            index: e.currentTarget.dataset.index
        });
    },
    close: function () {
        this.setData({
            show: false
        });
    },
    innerTap:function(){
        return false;
    },

    // getData() {
    //     var slef = this;
    //     wx.request({
    //         url: 'http://localhost:8080/getUser',
    //         header: {
    //             'content-type': 'application/x-www-form-nrlencoded'
    //         },
    //         method: 'post',
    //         dataType: 'json',
    //         responseType: 'text',
    //         success: function (res) {
    //             var list = res.data.list;
    //             slef.setData({
    //                 list: list
    //             });
    //         }
    //     })
    // }
})