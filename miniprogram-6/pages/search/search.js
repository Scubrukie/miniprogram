Page({
  data: {
    aniMation:{}
  },
  onLoad() {
    var animation=wx.createAnimation({
      duration:100,
      timingFunction:"ease"
    })
    this.animation=animation
  },
  bf(){
    this.animation.translate(0,-200).step()
    this.setData({
      aniMation:this.animation.export()
    })
  },
  bb(){
    this.animation.translate(0,0).step()
    this.setData({
      aniMation:this.animation.export()
    })
  }
})