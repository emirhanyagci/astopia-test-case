<script setup>
import PokeRow from "@/components/PokeRow.vue";
import Button from "../Button.vue";
import { MAX_POKE_COUNT, POKE_PER_PAGE } from "../../helpers/constants";
import { getPokemons } from "../../api/pokemonApi";
import Loading from "@/components/Loading.vue";
import { onMounted, ref } from "vue";
const pokemons = ref([]);
const isLoading = ref(true);
const currentPage = ref(1);
const maxPage = Math.ceil(MAX_POKE_COUNT / POKE_PER_PAGE);
onMounted(async () => {
  getPokemonsHandler(1);
});

async function getPokemonsHandler(page) {
  if (page <= 0 || page > maxPage) return;
  pokemons.value = [];
  isLoading.value = true;
  try {
    const pokes = await getPokemons(page);
    pokemons.value = pokes.data.results;
    currentPage.value = page;
    isLoading.value = false;
  } catch (e) {
    console.log(e);
  }
}
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

      <!-- <PokeRow></PokeRow>
      <PokeRow></PokeRow>
      <PokeRow></PokeRow> -->

      <template :key="url" v-for="{ url } in pokemons">
        <PokeRow :pokeUrl="url" />
      </template>
    </table>
  </div>
  <div v-if="isLoading" class="flex justify-center py-5">
    <Loading size="36" />
  </div>
  <footer
    class="text-sm text-gray-500 px-5 py-2 flex justify-between items-center"
  >
    <div>
      Showing
      <span class="font-bold"
        >{{ (currentPage - 1) * POKE_PER_PAGE + 1 }} -
        {{ currentPage * POKE_PER_PAGE }}</span
      >
      of <span class="font-bold">{{ MAX_POKE_COUNT }}</span> products
    </div>
    <div class="flex items-center gap-2">
      <Button
        :onClickHandler="
          () => {
            getPokemonsHandler(currentPage - 1);
          }
        "
        :disabled="currentPage <= 1"
      >
        Previous</Button
      >
      <Button
        :onClickHandler="
          () => {
            getPokemonsHandler(currentPage + 1);
          }
        "
        :disabled="currentPage >= maxPage"
      >
        Next</Button
      >
    </div>
  </footer>
</template>

<style></style>
