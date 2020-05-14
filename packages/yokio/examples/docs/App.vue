<template>
  <div id="app" class="owl-doc">
    <v-header></v-header >
    <div class="owl-doc-nav" v-if="show">
      <dl>
        <dt>开发指南</dt>
        <dd>
          <router-link to="/intro" exact>介绍</router-link>
        </dd>
        <dd>
          <router-link to="/start" exact>快速上手</router-link>
        </dd>
        <dd>
          <router-link to="/theme" exact>主题定制</router-link>
        </dd>
      </dl>
      <dl class="dl-two">
        <dt>组件</dt>
        <dd v-for="item in sortIndex" :key="item">
          <h4>{{sortItem[item]}}</h4>
          <template v-for="pkg in packages">
            <router-link v-if="pkg.showDemo !== false && pkg.sort == item" :key="pkg.name" :to="'/components/' + pkg.name" exact>{{pkg.name}} <span>{{pkg.chnName}}</span></router-link>
          </template>
        </dd>
      </dl>
    </div>
    <div class="owl-doc-container" :class="classStyle">
      <router-view class="doc-view"></router-view>
      <div class="doc-iframe" v-if="show && showIframe">
        <div class="show-phone">
          <div class="phone-bar">
            <img src="/phtitle.png" />
            <div class="phone-url">
              <input type="text" v-model="url" readonly="readonly">
            </div> 
          </div>
          <iframe :src="iframeSrc" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { sorts, packages } from '@src/config.json'
import vHeader from './view/header.vue'
export default {
  data () {
    return {
      show: true,
      showIframe: false,
      sortIndex: [0, 1, 2, 3],
      sortItem: [],
      packages: [],
      iframeSrc: '',
      url: ''
    }
  },
  created () {
    this.show = this.$route.name !== 'home'
    this.sortItem = sorts
    this.packages = packages
  },
  components: {
    vHeader
  },
  computed: {
    classStyle () {
      return {
        'home-container': !this.show ,
        'has-iframe': this.show && this.showIframe
      }
    }
  },
  mounted () {

  },
  watch: {
    '$route.matched' (v) {
      this.showIframe = v[0].meta.needShow
      this.show = v[0].name !== 'home'
      if (this.showIframe && this.show) {
        this.iframeSrc = '/mobile.html#/' + v[1].name
      }
    }
  },
  methods: {
    linkTo (name) {
      this.iframeSrc = '/mobile.html#/' + name.toLowerCase()
      this.$router.push({
        path: '/components/' + name
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/index';
$primary-color: #4DB87F !default;
html,body {
  height: 100%;
}
img {
  max-width: 100%;
  border: none;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  color: #333;
  font-size: 16px;
  min-width: 1100px;
  overflow-x: hidden;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
  position: relative;
}
a {
  text-decoration: none;
  color: #333;
}

#app, .container{
  max-width: 1460px;
  min-width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.owl-doc-header {
  position: fixed;
  height: 60px;
  width: 100%;
  background:#fff;
  z-index: 9;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
}
.owl-doc-nav {
  position: fixed;
  width: 300px;
  top: 60px;
  bottom: 0;
  z-index: 10;
  border-right: 1px solid #eee;
  dl {
    dt {
      padding-left: 20px;
      margin: 10px 0;
      font-weight: 800;
    }
    dd {
      margin: 0;
      padding: 0;
      a {
        display: block;
        line-height: 50px;
        padding-left: 30px;
        border-right: 2px solid transparent;
        &.router-link-exact-active {
          background: #dde6e1;
          color: $primary-color;
          border-right: 2px solid $primary-color
        }
      }
      h4 {
        font-weight: normal;
        font-size: 16px;
        color: #999;
        margin: 5px 0;
        padding-left: 30px;
      }
    }
  }
}
.owl-doc-nav dl.dl-two a {
   padding-left: 40px;
   span {
     color: #999;
     font-size: 14px;
   }
}
.owl-doc-container {
  padding-left: 310px;
  position: relative;
  padding-top: 65px;
  z-index: 8;
  &.home-container {
    padding-left: 0;
  }
  &.has-iframe .doc-view{
    padding-right: 360px;
  }
}
.doc-view {
  position: relative;
  padding: 0 20px;
  pre {
    background-color: #f1f4f8;
    padding: 10px;
    border-radius: 2px;
    font-size: 13px;
    font-family: Source Code Pro,Monaco,Inconsolata,monospace;
  }
  .code_inline {
    display: inline-block;
    background: #ecebeb;
    border: 1px solid #ececec;
    border-radius: 2px;
    font-size: 13px;
    line-height: 1;
    color: #ec3b19;
    padding: 3px 5px;
    margin: 0 5px;
  }
}
.doc-iframe {
  position: absolute;
  top: 100px;
  right: 10px;
  width: 320px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 9px 5px #eee;
  &.fixed {
    position: fixed;
  }
}
@media screen and (max-width:768px){
  .doc-iframe {
    display: none;
  }
}
.phone-bar {
  background: #545456;
  padding: 5px 10px;
}
.phone-url input {
  width: 100%;
  height: 28px;
  line-height: 28px;
  color: #fff;
  background-color: #a2a2a2;
  border-radius: 4px;
  white-space: nowrap;
  overflow-x: scroll;
  border: none;
  margin: 5px auto 0;
  padding: 0 5px;
  -webkit-appearance: textfield;
  -webkit-rtl-ordering: logical;
  cursor: text;
  outline:none;
}
iframe {
  width: 100%;
  height: 500px;
  vertical-align: middle;
}
// page
.logo {
  width: 300px;
  float: left;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  position: relative;
}
.bar-nav {
  float: right;
  text-align: center;
  line-height: 60px;
  margin-right: 30px;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    list-style: none;
    line-height: 58px;
    padding:0 10px;
    margin: 0 5px;
    border-bottom: 2px solid transparent;
    &:hover a {
      color: $primary-color;
    }
    &.active {
      border-bottom: 2px solid $primary-color;
      a {
        color: $primary-color;
      }
    }
  }
}
blockquote {
  padding: 12px 24px 12px 30px;
  margin: 2em 0;
  border-left: 4px solid #4DB87F;
  background-color: #f8f8f8;
  position: relative;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  &:before {
    content: "''";
    background-color: #4DB87F;
    position: absolute;
    top: 14px;
    left: -12px;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
  }
}
</style>
