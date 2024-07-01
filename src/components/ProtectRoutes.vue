<script setup>
import { onMounted, watch } from "vue";
import { useLocalStorage } from "../composables/useLocalStorage";
import verifyJwt from "../helpers/verifyJwt";
import { refresh } from "../api/authApi";
import { toast } from "vue3-toastify";
import toaster from "@/helpers/toaster";
import { useRouter } from "vue-router";
// use useAuth and check with jwt-decode package
// if expired try request to refresh uri
// if cant redirect to login
const router = useRouter();
const accessToken = useLocalStorage("jwt");

onMounted(async () => {
  if (!verifyJwt(accessToken)) {
    try {
      const newToken = await refresh();
      console.log(newToken);
      localStorage.setItem("jwt", JSON.stringify(newToken.data.accessToken));
    } catch (e) {
      const message = e.response.data.message || "Something went wrong";
      toaster(toast.error, message);
      router.push({ path: "/login", replace: true });
    }
  }
});
</script>
<template>
  {{ accessToken }} <br />
  <router-view></router-view>
</template>
<style></style>
