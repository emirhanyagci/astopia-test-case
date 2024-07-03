<script setup>
import { ErrorMessage } from "vee-validate";
const { name } = defineProps(["name"]);
</script>
<template>
  <ErrorMessage class="text-sm text-red-600" :name="name" />
</template>
<style></style>
