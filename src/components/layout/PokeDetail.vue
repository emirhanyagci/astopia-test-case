<script setup>
import { ArrowLeft } from "lucide-vue-next";
</script>
<template>
  <div class="p-3">
    <router-link to="/home/pokemon">
      <button class="shadow-button p-1 rounded-lg"><ArrowLeft /></button>
    </router-link>
  </div>
  <div class="text-center py-2">
    <header class="text-2xl text-slate-800">Ivysaur</header>
  </div>
  <div class="flex justify-center flex-col items-center sm:flex-row">
    <div class="w-full flex justify-center sm:w-96">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        class="w-80 sm:w-full"
        alt=""
      />
    </div>

    <ul
      id="detail-card"
      class="grid grid-cols-2 text-center place-content-center p-5 w-3/4 gap-y-3 max-w-96 sm:text-left"
    >
      <li><span class="detail-header">Height</span><span>3dm</span></li>
      <li><span class="detail-header">Height</span><span>3dm</span></li>
      <li>
        <span class="detail-header">Abilities</span><span>limber,imposter</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.detail-header {
  @apply text-gray-400;
}
#detail-card > li {
  @apply flex flex-col text-base col-span-1;
}
</style>
