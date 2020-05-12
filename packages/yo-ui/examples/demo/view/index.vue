<template>
  <div class="home-page">
    <div class="brand">
      <h2>owl-ui</h2>
      <p>轻量级移动端 Vue 组件库</p>
    </div>

    <div v-for="item in sortIndex" :key="item" class="demo-list">
      <div class="demo-list-block" @click="accordion(item)">{{sortItem[item]}}</div>
      <owl-list v-show="sortOpen[item] == 1">
        <template v-for="pkg in packages">
          <owl-item v-if="pkg.showDemo !== false && pkg.sort == item" :key="pkg.name" touch arrow>
          <div class="demo-accordion-line">
            <a :href="'./mobile.html#/'+pkg.name.toLowerCase()">{{pkg.name}}<span>{{pkg.chnName}}</span></a>
          </div>
        </owl-item>
        </template>
      </owl-list>
    </div>
  </div>
</template>
<script>
import { packages, sorts } from '@src/config.json'
export default {
  data () {
    return {
      packages: [],
      sortItem: [],
      sortIndex: [0, 1, 2, 3],
      sortOpen: [0, 0, 0, 0]
    }
  },
  created () {
    this.sortItem = sorts
    this.packages = packages
    // console.log(item)
  },
  methods: {
    accordion (id) {
      if (this.sortOpen[id] === 1) {
        this.$set(this.sortOpen, id, 0)
      } else {
        this.$set(this.sortOpen, id, 1)
      }
      console.log(this.sortOpen, this.sortOpen[id] === 1)
    }
  }
}
</script>
<style lang="scss">
.demo-list {
  margin: 10px 15px;
  background-color: #fff;
  border-radius: 3px;
  .owl-list {
    margin: 0;
  }
}
.brand {
  text-align: center;
}
.demo-footer {
  text-align: center;
  font-size: 14px;
  color: #999;
  position: absolute;
}
.demo-list-block {
  padding: 15px 10px;
}
.demo-accordion-line a{
  display: block;
}
</style>
