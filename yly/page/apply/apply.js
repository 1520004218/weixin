Page({
  data: {
    array: ['HTML5', '复合型人才', 'JAVA', 'GoLang'],
    pickerTitle: '请选择课程',
    form: {
      name: '',
      phone: '',
      course: '',
      content: ''
    }
  },
  onLoad() {

  },
  bindPickerChange(e){
    this.setData({
      pickerTitle: this.data.array[e.detail.value]
    })
  },
  bindKeyInput(e){
    this.data.form[e.currentTarget.dataset.key] = e.detail.value;
    this.setData({
      form: this.data.form
    })
  },
  submit(){
    this.data.form;
    debugger;
    wx.request({
      url: 'http://ylyedu.com/home/sign/wechatgotosign', //仅为示例，并非真实的接口地址
      data: this.data.form,
      success: function (res) {
        console.log(res.data)
      }
    })

  }
})
