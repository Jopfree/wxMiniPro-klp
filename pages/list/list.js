//chat.js
//获取应用实例
const app = getApp()

Page({
  data: {
    friends: friends.list
  },
  gotoChat(event) {
    const currentUser = event.currentTarget.dataset.user;
    wx.navigateTo({
      url: '../chat/chat?nickname=' + currentUser.nickname
    })
  }
})
