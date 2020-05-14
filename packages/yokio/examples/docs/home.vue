<template>
  <div>
    <div class="banner-wrapper">
      <div class="container">
        <div class="banner-text">
          <h2>OwlUI</h2>
          <p>一套轻量级的移动端 Vue 组件库</p>
          <div class="start-button">
            <a href="#/intro" class="btn-start start">开始使用</a>
            <a href="" class="btn-start scan">扫描体验</a>
          </div>
        </div>
      </div>
    </div>
    <div class="animated">
      <img src="/mobile_life.svg" alt="">
    </div>
  </div>
</template>
<style lang="scss">
.animated {
  width: 500px;
  right: 100px;
  top: 20vh;
  position: absolute;
}
.banner-text {
  padding-left: 100px;
  padding-top: 25vh;
  h2 {
    font-family: Avenir-Heavy;
    font-size: 68px;
    color: #0d1a26;
    letter-spacing: 0;
    line-height: 76px;
    font-weight: 500;
    margin: 0;
  }
  p {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #314659;
    letter-spacing: 0;
    line-height: 38px;
    margin: 16px auto 20px;
  }
  .btn-start {
    height: 40px;
    line-height: 40px;
    margin-right: 20px;
    font-size: 16px;
    min-width: 114px;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #4DB87F;
    &.start {
      background-color: #4DB87F;
      color: #fff;
    }
    &.scan {
      border: 1px solid #4DB87F;
      color: #4DB87F;
    }
  }
}
</style>
