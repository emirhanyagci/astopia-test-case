import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";
import Home from "@/pages/Home.vue";
import ProtectRoutes from "@/components/ProtectRoutes.vue";
import PokeDetail from "./components/layout/PokeDetail.vue";
import Hero from "@/components/layout/Hero.vue";
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  {
    path: "/home",
    component: ProtectRoutes,
    children: [
      {
        path: "",
        component: Home,
        redirect: "home/pokemon",
        meta: { requiresAuth: true },
        children: [
          {
            path: "pokemon",
            component: Hero,
          },
          {
            path: "pokemon/:id",
            component: PokeDetail,
          },
        ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from) => {
//   console.log(to);

//   if (to.meta.requiresAuth) {
//     if (!isLogged()) {
//       return "/login";
//     }
//   }
// });
export default router;
