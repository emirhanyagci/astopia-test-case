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
    :class="`bg-white shadow-button p-2 rounded-lg text-gray-500 text-sm transition-all ${
      disabled ? '' : 'hover:underline'
    } `"
  >
    <slot />
  </button>
</template>
<style></style>
