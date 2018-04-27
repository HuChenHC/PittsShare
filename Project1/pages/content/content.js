Page({
  data: {
    imgUrls: [
      '../../image/ads1.png',
      '../../image/ads2.png',
      '../../image/ads3.png',
      '../../image/ads4.png',
    ],
    whichPage: [
      {
        "icon": '../../image/housingIcon.png',
        "page": "house",
        "text": "住房转租"
      },
      {
        "icon": '../../image/secIcon.png',
        "page": "second",
        "text": "二手交易"
      }
    ],
    bindTapSrc: [
      "house",
      "second"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  house: function () {
    wx.switchTab({
      url: '../housing/housing'
    }),
    console.log("click housing...")
  },
  second: function(){
    wx.switchTab({
      url:'../secHand/secHand'
    }),
    console.log("click second-hand....")
  }
})