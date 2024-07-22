import "./styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import autoLoadRoute from "./router.js";

const initApp = async () => {
  const app = createApp(App);
  const router = await autoLoadRoute();
  app.use(createPinia());
  app.use(router);
  app.mount("#app");
};

initApp();
