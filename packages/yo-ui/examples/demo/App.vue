<template>
  <div id="app">
    <router-view class="demo-nav" name="demonav" v-if="isIframe"></router-view>
    <keep-alive include="index">
      <router-view class="demo" name="main"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isIframe: false
    }
  },
  created() {
    this.isIframe = window.top === window.self
  }
}
</script>
<style>
*, :after, :before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html,body {
  height: 100%;
}
body {
  margin: 0;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  color: #494949;
  background-color: #f8f8f8;
  min-height: 100%;
  position: relative;
}
a {
  color: #333;
  text-decoration: none;
}
#app {
  height: 100%;
}
.demo-title{
  padding-left: 15px;
  font-size: 16px;
  font-weight: 800;
  color: #444;
  margin-bottom: 10px;
}
</style>
