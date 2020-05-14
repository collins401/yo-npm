<template>
  <button type="button" class="yo-button" :class="btnClass" :style="sty">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'yo-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    radius: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    }
  },
  computed: {
    btnClass () {
      return {
        ['yo-button--' + this.type]: this.type,
        [this.size]: this.size,
        'block': this.block,
        'radius': this.radius,
        'plain': this.plain,
        'disabled': this.disabled,
        'custom-color': this.color
      }
    },
    sty () {
      let bgColor = ''
      let txtColor = ''
      let borderColor = this.color
      if (this.color) {
        bgColor = this.plain ? '#fff' : this.color
        txtColor = this.plain ? this.color : '#fff'
      }
      return {
        'backgroundColor': bgColor,
        'color': txtColor,
      }
    }
  }
}
</script>
