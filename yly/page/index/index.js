Page({
  data: {
    background: [
      'http://ylyedu.com/uploads/images/slider/20170515/149481371359190c1170196.jpg', 'http://ylyedu.com/uploads/images/slider/20170515/149481445859190efa83375.jpg', 'http://ylyedu.com/uploads/images/slider/20170515/149481449359190f1d64e4d.jpg'],

    environment: ['http://ylyedu.com/uploads/images/eduEnvironment/149484332859197fc03a8f3.jpg','http://ylyedu.com/uploads/images/eduEnvironment/149484333959197fcb270ca.jpg', 'http://ylyedu.com/uploads/images/eduEnvironment/149484326759197f831bae6.png', 'http://ylyedu.com/uploads/images/eduEnvironment/149484327659197f8c3e2aa.png', 'http://ylyedu.com/uploads/images/eduEnvironment/149484328859197f9853344.png','http://ylyedu.com/uploads/images/eduEnvironment/149484330059197fa4a3cdb.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  onLoad(){

  },
  environment(e){
    let cur = e.currentTarget.dataset.item;
    wx.previewImage({
      current: cur,
      urls: this.data.environment
    })
  }
})
