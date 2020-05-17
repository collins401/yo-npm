<template>
  <span :class="`${b()} ${cls}`">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'yo-tag',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cls () {
      let clsName = ''
      if (this.type) {
        clsName = clsName + 'yo-tag--' + this.type
      }
      if (this.size) {
        clsName = clsName + ' ' + this.size
      }
      if (this.plain) {
        clsName = clsName + ' plain'
      }
      return clsName
    }
  }
}
</script>
