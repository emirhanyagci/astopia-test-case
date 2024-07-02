<script setup>
const { size } = defineProps(["size"]);
</script>
<template>
  <button
    class="bg-white shadow-button p-2 rounded-lg text-gray-500 text-sm transition-all hover:underline"
  >
    <slot />
  </button>
</template>
<style></style>
