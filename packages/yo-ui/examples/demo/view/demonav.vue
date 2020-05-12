<template>
  <div class="demo-header">
    <a href="#/index" class="home"></a>  <span class="nav-title">{{name}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  watch: {
    '$route.matched': {
      handler(newName, oldName) {
        this.name = newName[0].name
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.demo-header {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}
.home{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23999' d='M959.39 527.762c0 23.128-18.419 41.874-41.138 41.874-12.336 0-23.277-5.64-30.818-14.394L541.09 202.729a40.629 40.629 0 0 0-58.18 0L237.802 452.204c2.878 5.636 4.654 11.927 4.654 18.69v165.477c0 .328-.089.635-.097.961h.298v163.004c0 23.126 18.506 41.872 41.337 41.872h82.569v-164.47c0-22.85 18.52-41.368 41.369-41.368h206.844c22.848 0 41.369 18.518 41.369 41.369 0 22.846-18.52 41.369-41.37 41.369H449.3v165.474c0 22.427-17.875 40.583-40.142 41.246v.122h-146.01c-57.116 0-103.418-46.864-103.418-104.678v-183.94h.085c-.006-.327-.097-.634-.097-.962V531.68l-23.163 23.576c-7.542 8.745-18.476 14.38-30.808 14.38-22.719 0-41.139-18.746-41.139-41.874 0-11.862 4.896-22.52 12.688-30.141l-.237-.242L439.275 128.71c40.164-40.88 105.286-40.88 145.45 0l361.57 368.011-.3.306c8.18 7.653 13.395 18.536 13.395 30.735zM614.734 842.207c.443 0 .854.12 1.294.132v-.132h122.683c22.83 0 41.338-18.746 41.338-41.872V637.33h.534c-.016-.496-.145-.961-.145-1.464 0-23.126 18.417-41.874 41.139-41.874 22.72 0 41.137 18.748 41.137 41.874 0 .503-.126.968-.146 1.464h.406v183.94c0 57.813-46.3 104.679-103.419 104.679H616.026v-.132c-.44.014-.852.132-1.294.132-22.72 0-41.14-18.744-41.14-41.87.003-23.124 18.422-41.873 41.142-41.873z'/%3E%3C/svg%3E") no-repeat 50%;
    background-size: contain;
    margin-top: -3px;
}
.nav-title {
  display: inline-block;
  margin-left: 20px;
  text-transform: capitalize;
}
</style>

