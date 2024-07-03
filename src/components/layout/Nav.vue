<script setup>
import { logout } from "@/api/authApi";
import Button from "../Button.vue";
import { useRouter } from "vue-router";
import toaster from "@/helpers/toaster";
import { toast } from "vue3-toastify";

const router = useRouter();
async function onLogout() {
  try {
    await logout();
    localStorage.removeItem("jwt");
    toaster(toast.success, "Successfully logged out!");
    router.push("/login");
  } catch (e) {
    console.log(e);
  }
}
</script>
<template>
  <nav class="flex justify-center bg-white p-2 shadow-nav">
    <div class="container flex items-center justify-between">
      <router-link to="/home/pokemon">
        <div>
          <img src="/logo.png" alt="" class="w-40 sm:w-48 md:w-52 xl:w-64" />
        </div>
      </router-link>
      <div>
        <Button :onClickHandler="onLogout">Logout</Button>
      </div>
    </div>
  </nav>
</template>
<style></style>
