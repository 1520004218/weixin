function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: 'http://or2e3fzwr.bkt.clouddn.com/IMG_0905.mp4',
    title: '善用时间',
    content: '人的一生都要活一次,\n虽然对于广大的宇宙来说,\n我们不过是一个小小的过客,\n但我们有能力去完成任何事,\n真的, 任何事情,\n如果 我们善用时间的话...',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  // 弹幕
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  //  下拉刷新
  onPullDownRefresh: function () {
    // wx.stopPullDownRefresh()
  },
  //  用户转发
  onShareAppMessage: function () {
    return {
      title: '如果,我们善用时间的话...',
      path: '/page/index/inde'
    }
  }

})
// 请求豆瓣接口
// wx.request({
//   url: 'https://api.douban.com/v2/movie/top250',
//   data: {

//   },
//   header: {
//     'content-type': 'json'
//   },
//   success: function (res) {
//     console.log(res)
//   }
// })