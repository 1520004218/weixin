Page({
  data: {
    phone: '400-825-1689'
  },
  onLoad() {

  },
  phone(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  address(){
    var latitude = 39.90403;
    var longitude = 116.407526;
    wx.openLocation({
      name: '北京市昌平区郑平路宏福科技园综合楼6层',
      address: '北京市昌平区郑平路宏福科技园综合楼6层',
      latitude: latitude,
      longitude: longitude,
      scale: 28
    })
  }
})
