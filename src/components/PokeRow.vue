<script setup>
import { Menu } from "lucide-vue-next";
</script>
<template>
  <tr class="">
    <td>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt=""
      />
    </td>
    <td>Ditto</td>
    <td>50</td>
    <td>9</td>
    <td>
      <router-link to="pokemon/1">
        <button class="bg-indigo-500 shadow-button p-1 rounded-lg">
          <Menu class="text-white" />
        </button>
      </router-link>
    </td>
  </tr>
</template>

<style></style>
