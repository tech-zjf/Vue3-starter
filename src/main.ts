import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Api from "./api";
import "@/assets/style/main.css";

const app = createApp(App);
app.config.globalProperties.$Api = Api;

app.use(createPinia());
app.use(router);

app.mount("#app");
