//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    mainmodel: {
      "url": "../../images/buynow.png",
      "title": "菜单",
    },
    menulist: [{
        "id": "1",
        "url": "../../images/coll_s.png",
        "title": "顶部",
      },
      {
        "id": "2",
        "url": "../../images/add.png",
        "title": "添加",
      },
      {
        "id": "3", 
        "url": "../../images/addincart.png",
        "title": "购物车",
      },
    ],
  },



  // onLoad: function() {

  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },

  menuItemClick: function(res) {
    console.log(res);
    //获取点击事件的信息
    let clickInfo = res.detail.iteminfo
    console.log(clickInfo);
    // 根据不同类型进行判别处理
    //事件的处理 代码

  }

})