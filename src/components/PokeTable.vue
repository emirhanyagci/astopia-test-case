<script setup>
import PokeRow from "./PokeRow.vue";
</script>
<template>
  <div class="overflow-auto">
    <table class="w-full text-left [&>tr:not(:last-child)]:border-b min-w-96">
      <thead>
        <tr
          class="text-slate-500 text-sm border- [&>th]:py-3 [&>th]:font-semibold border-b-slate-400/30 border-b"
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
</template>

<style></style>
