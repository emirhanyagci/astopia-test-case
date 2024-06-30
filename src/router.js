import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";
import Home from "@/pages/Home.vue";
import isLogged from "./helpers/isLogged";
import Test from "./pages/Test.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  {
    path: "/home",
    component: Home,
    meta: { requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  console.log(to);
  if (to.meta.requiresAuth) {
    if (!isLogged()) {
      return "/login";
    }
  }
});
export default router;
