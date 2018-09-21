//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    imgUrls: [
      'http://t_old.yunfanfamily.com//upload//shop//201808//31//1535728774584385.png',
      'http://t_old.yunfanfamily.com\/upload\/shop\/201808\/31\/1535705202313662.png',
      'http://t_old.yunfanfamily.com\/upload\/shop\/201809\/05\/1536115254195187.png',
      'http://t_old.yunfanfamily.com\/upload\/shop\/201808\/31\/1535728198869280.png',
      'http://t_old.yunfanfamily.com//upload//shop//201809//17//1537165482402616.jpg',
      'http://t_old.yunfanfamily.com\/upload\/shop\/201808\/31\/1535728601451987.png',
      'http://t_old.yunfanfamily.com\/upload\/shop\/201809\/07\/1536284185962396.jpg'
    ],
// ---------------
    itemType: 0,
    isAutoplay:false,
    isScrollShow: false,
    fontImg: [
      { img: '/images/Wheel/Wheel1.png', },
      { img: '/images/Wheel/Wheel2.jpg', },
      { img: '/images/Wheel/Wheel3.jpg', }
    ],
    gades: [
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      { Img: '/images/config.png', title: "闲置教材", url: '' },
      // { Img: '/images/config.png', title: "闲置教材", url: '' },
      // { Img: '/images/config.png', title: "闲置教材", url: '' },
      // { Img: '/images/config.png', title: "闲置教材", url: '' }
    ],
   
  },
  // ----------
  swiperChange(e) {
    this.setData({
      itemType: e.detail.current,
    })
  },
//  监听下拉事件
  onPageScroll: function (e) {
    let _this = this;
    let topItem = e.scrollTop;
    if (e.scrollTop>250){
         _this.data.isScrollShow= true
         _this.setData({
           isScrollShow: _this.data.isScrollShow
         })
    } else if (250>e.scrollTop){
       _this.data.isScrollShow= false
       _this.setData({
         isScrollShow: _this.data.isScrollShow
       })
   }
  },
  


  onLoad: function () {
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperChange(e) {
    this.setData({
      itemType: e.detail.current
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  jumpToMyPage: function (e) {
    // console.log('-------------click', e);
   
    wx.navigateTo({
      url: '../search/search'
   
    })
    // wx.showToast("跳转")
  }


})
