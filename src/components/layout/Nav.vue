<script setup>
import Button from "../Button.vue";
</script>
<template>
  <nav class="bg-white shadow-nav flex justify-center p-2">
    <div class="container flex items-center justify-between">
      <div>
        <img
          src="/public/logo.png"
          alt=""
          class="w-40 sm:w-48 md:w-52 xl:w-64"
        />
      </div>
      <div>
        <Button>Login</Button>
        <Button>Logout</Button>
      </div>
    </div>
  </nav>
</template>
<style></style>
