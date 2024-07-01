<script setup>
import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import { loginSchema } from "../helpers/authValidationSchema";
import FormErrorMessage from "@/components/FormErrorMessage.vue";
import { toast } from "vue3-toastify";
import toaster from "@/helpers/toaster";
import { login } from "../api/authApi";
const router = useRouter();
async function onSubmitHandler(values) {
  try {
    const user = await login(values.email, values.password);
    toaster(toast.success, "Successfully logged in!");
    localStorage.setItem("jwt", JSON.stringify(user.data.accessToken));
    router.push({ path: "/home", replace: true });
  } catch (e) {
    const message = e.response.data.message || "Something went wrong";
    toaster(toast.error, message);
  }
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex justify-center">
        <img src="/public/logo.png" alt="" class="w-72" />
      </div>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form
        :validation-schema="loginSchema"
        @submit="onSubmitHandler"
        class="space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              autocomplete="email"
              required
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            />
            <FormErrorMessage name="email" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <Field
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            />
            <FormErrorMessage name="password" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            Sign in
          </button>
        </div>
      </Form>

      <p class="mt-3 text-center text-sm text-gray-500">
        Don't have an account?
        <router-link
          to="/signup"
          href="#"
          class="font-semibold leading-6 text-slate-800 hover:text-slate-600"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>
<style></style>
