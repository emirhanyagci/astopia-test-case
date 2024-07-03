<script setup>
import { computed, ref } from "vue";
import checkStrong from "@/helpers/checkStrong";
const props = defineProps(["password"]);

const strongCheck = computed(() => {
  console.log(props.password);
  return checkStrong(props.password);
});
</script>
<template>
  <span class="text-sm text-green-500" v-if="strongCheck.isStrong">Strong</span>

  <span class="text-sm text-orange-500" v-else-if="strongCheck.isModerate"
    >Moderate</span
  >
  <span
    class="justify-self-end text-sm text-red-500"
    v-else-if="strongCheck.isWeak"
    >Weak</span
  >
</template>

<style scoped></style>
