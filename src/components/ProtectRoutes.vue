<script setup>
import { onMounted, ref } from "vue";
import { useLocalStorage } from "../composables/useLocalStorage";
import verifyJwt from "@/helpers/verifyJwt";
import { refresh } from "@/api/authApi";
import { toast } from "vue3-toastify";
import toaster from "@/helpers/toaster";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
// use useAuth and check with jwt-decode package
// if expired try request to refresh uri
// if cant redirect to login
const router = useRouter();
const accessToken = useLocalStorage("jwt");
const isLoading = ref(true);
onMounted(async () => {
  if (!verifyJwt(accessToken)) {
    try {
      const newToken = await refresh();
      console.log(newToken);
      localStorage.setItem("jwt", JSON.stringify(newToken.data.accessToken));
      isLoading.value = false;
    } catch (e) {
      const message = e.response.data.message || "Something went wrong";
      toaster(toast.error, message);
      router.push({ path: "/login", replace: true });
    }
  } else {
    isLoading.value = false;
  }
});
</script>
<template>
  <div
    v-if="isLoading"
    class="flex h-screen w-screen items-center justify-center"
  >
    <Loading size="64" />
  </div>
  <router-view v-else></router-view>
</template>
<style></style>
