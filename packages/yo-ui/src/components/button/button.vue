<template>
  <button :class="`${b()} ${btnClass}`"
    :type="type">
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
    }
  },
  computed: {
    btnClass() {
      return {
        [this.type]: true,
        radius: this.radius,
        block: this.block,
        [this.size]: true,
        plain: this.reverse,
        disabled: this.disabled,
      }
    },
  }
}
</script>
