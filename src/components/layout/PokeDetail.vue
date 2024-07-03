<script setup>
import { ArrowLeft } from "lucide-vue-next";
import { useRoute } from "vue-router";
import Button from "../Button.vue";
import { onMounted, ref } from "vue";
import { getPokemonWithId } from "@/api/pokemonApi";
import Loading from "@/components/Loading.vue";
const route = useRoute();
const pokeId = route.params.id;
const pokemon = ref();
const isLoading = ref(true);
onMounted(async () => {
  try {
    const poke = await getPokemonWithId(pokeId);

    const { name, sprites, weight, height, abilities } = poke.data;
    pokemon.value = { name, sprites, weight, height, abilities };
    isLoading.value = false;
  } catch (e) {
    isLoading.value = false;
  }
});
</script>
<template>
  <div class="flex justify-center p-5" v-if="isLoading">
    <Loading size="52" />
  </div>
  <div class="p-5 text-center text-xl" v-else-if="!isLoading && !pokemon">
    Pokemon not found 😢
  </div>
  <template v-else>
    <div class="p-3">
      <router-link to="/home/pokemon">
        <Button><ArrowLeft size="20" /></Button>
      </router-link>
    </div>
    <div class="py-2 text-center">
      <header class="text-2xl text-slate-800">{{ pokemon.name }}</header>
    </div>
    <div class="flex flex-col items-center justify-center sm:flex-row">
      <div class="flex w-full justify-center sm:w-96">
        <img
          :src="pokemon.sprites.front_default"
          class="w-80 sm:w-full"
          alt=""
        />
      </div>

      <ul
        id="detail-card"
        class="grid w-3/4 max-w-96 grid-cols-2 place-content-center gap-y-3 p-5 text-center sm:text-left"
      >
        <li>
          <span class="detail-header col-span-1">Height (m)</span
          ><span>{{ pokemon.height / 10 }}</span>
        </li>
        <li>
          <span class="detail-header col-span-1">Weight (kg)</span
          ><span>{{ pokemon.weight / 10 }}</span>
        </li>
        <li class="col-span-2">
          <span class="detail-header">Abilities</span>
          <div class="flex justify-center sm:justify-start">
            <span
              :key="ability.url"
              v-for="({ ability }, index) in pokemon.abilities"
            >
              {{ ability.name }}
              {{ index + 1 !== pokemon.abilities.length ? "," : null }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </template>
</template>
<style scoped>
.detail-header {
  @apply text-gray-400;
}
#detail-card > li {
  @apply flex flex-col text-base;
}
</style>
