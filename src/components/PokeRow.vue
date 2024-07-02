<script setup>
import { Menu } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import { getPokemonWithUrl } from "../api/pokemonApi";
const { pokeUrl } = defineProps(["pokeUrl"]);
const pokemon = ref(null);

onMounted(async () => {
  try {
    const poke = await getPokemonWithUrl(pokeUrl);
    const { sprites, name, weight, height, id } = poke.data;
    pokemon.value = { sprites, name, weight, height, id };
  } catch (e) {
    console.log(e);
  }
});
</script>
<template>
  <tr v-if="pokemon">
    <td>
      <img :src="pokemon.sprites.front_default" />
    </td>
    <td>{{ pokemon.name }}</td>
    <td>{{ pokemon.weight / 10 }}</td>
    <td>{{ pokemon.height / 10 }}</td>
    <td>
      <router-link :to="`pokemon/${pokemon.id}`">
        <button class="rounded-lg bg-indigo-500 p-1 shadow-button">
          <Menu class="text-white" />
        </button>
      </router-link>
    </td>
  </tr>
</template>

<style></style>
