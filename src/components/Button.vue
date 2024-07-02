<script setup>
const { size, onClick, disabled } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: String,
  onClickHandler: Function,
});
</script>
<template>
  <button
    @click="onClickHandler"
    :disabled="disabled"
    :class="`rounded-lg bg-white p-2 text-sm text-gray-500 shadow-button transition-all ${
      disabled ? '' : 'hover:underline'
    } `"
  >
    <slot />
  </button>
</template>
<style></style>
