<template>
  <div>
     <router-view class="owl-doc-components"></router-view>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  mounted () {
    // document.querySelector('.qrcode').addEventListener('mouseenter', function () {
    //   console.log('a')
    // })
    let _this = this
    document.addEventListener('scroll', function (event) {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      console.log(document.querySelector('.doc-iframe').styles)
      let docIframe = document.querySelector('.doc-iframe')
      let docIframeLeft = docIframe.getBoundingClientRect().x
      console.log(docIframeLeft)
      if (scrollTop > 1) {
        docIframe.classList.add('fixed')
        docIframe.style.left = docIframeLeft + 'px'
      } else {
        docIframe.classList.remove('fixed')
        docIframe.style.left = 'auto'
      }
    })
  },
  watch: {
    '$route.matched': {
      handler(newName, oldName) {
        this.$nextTick(() => {
          let qrcode = document.createElement('i')
          qrcode.className = 'qrcode'
          let qrcodeUrl = location.origin + '/mobile.html#/' + newName[1].name
          this.$parent.url = qrcodeUrl
          qrcode.innerHTML = `<a href="${qrcodeUrl}"><i>请使用手机扫码体验</i><span id="qrCode"></span></a>`
          document.querySelector('.owl-doc-components h1').appendChild(qrcode)
          document.querySelector('.qrcode').addEventListener('mouseenter', function () {
            if (!document.querySelector('#qrCode').innerHTML) {
              // if (document.querySelector('#qrCode').classList.co)
              let qrcodeImg = new QRCode('qrCode', {
                  width: 150, // 图像宽度
                  height: 150, // 图像高度
                  colorDark : "#000000", // 前景色
                  colorLight : "#ffffff", // 背景色
                  typeNumber:4
              })
              qrcodeImg.clear() // 清除二维码 
              qrcodeImg.makeCode(qrcodeUrl) // 生成另一个新的二维码
            }
          })
          // document.querySelector('.qrcode').addEventListener('mouseleave', function () {
          //   console.log('111')
          // })
        })
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss">
.owl-doc-components h1 .qrcode {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  margin-left: 20px;
  width: 22px;
  height: 22px;
  opacity: 1;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' data-icon='qrcode' width='1em' height='1em' fill='%23666' aria-hidden='true'%3E%3Cpath d='M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z'/%3E%3C/svg%3E") no-repeat 1px 1px;
  background-size: cover;
  z-index: 9
}
.qrcode a {
    position: absolute;
    top: 24px;
    font-size: 14px;
    width: 190px;
    height: 210px;
    border: 1px solid #ddd;
    text-align: center;
    opacity: 0;
    transform: scale(.5);
    transform-origin: 50% top 0;
    transition: all .1s ease-in-out 50ms;
    background: #fff;
    text-decoration: none;
    font-style: normal;
    left: -88px;
    pointer-events: none
}
.qrcode a i {
  line-height: 40px;
  height: 40px;
  display:block;
  font-style: normal;
}
.qrcode a span {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
}
.qrcode:hover {
    opacity: 1
}
.qrcode:hover a {
    display: inline-block;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1)
}
</style>
