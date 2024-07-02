<script setup>
import PokeRow from "@/components/PokeRow.vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
</script>
<template>
  <div class="overflow-auto">
    <table class="w-full text-left [&>tr:not(:last-child)]:border-b min-w-96">
      <thead>
        <tr
          class="text-slate-500 text-sm [&>th]:py-3 [&>th]:font-semibold border-b-slate-400/30 border-b"
        >
          <th class="w-36 px-5">Image</th>
          <th class="min-w-20">Name</th>
          <th class="min-w-20">Weight</th>
          <th class="min-w-20">Height</th>
          <th class="w-20">Details</th>
        </tr>
      </thead>
      <PokeRow></PokeRow>
      <PokeRow></PokeRow>
      <PokeRow></PokeRow>
    </table>
  </div>
  <footer
    class="text-sm text-gray-500 px-5 py-2 flex justify-between items-center"
  >
    <div>
      Showing <span class="font-bold">1-10</span> of
      <span class="font-bold">32</span> products
    </div>
    <div class="flex items-center gap-2">
      <button
        class="bg-white shadow-button p-2 rounded-lg transition-all hover:underline"
      >
        Previous
      </button>
      <button
        class="bg-white shadow-button p-2 rounded-lg transition-all hover:underline"
      >
        Next
      </button>
    </div>
  </footer>
</template>

<style></style>
