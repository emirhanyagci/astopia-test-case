import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const app = createApp(App);
app.use(router);
app.use(Vue3Toasity, {
  autoClose: 3000,
  clearOnUrlChange: false,
});
app.mount("#app");
// don't forget add class sorter
