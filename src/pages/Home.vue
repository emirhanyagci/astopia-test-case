<script setup>
import Nav from "@/components/layout/Nav.vue";

// watch
</script>
<template>
  <div class="space-y-6">
    <Nav></Nav>
    <main class="flex justify-center">
      <div class="container rounded-2xl bg-white">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<style></style>
