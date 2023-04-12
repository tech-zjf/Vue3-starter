import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Api from "./api";
import "@/assets/style/main.css";
import moment from "moment";

const app = createApp(App);
app.config.globalProperties.$Api = Api;
app.config.globalProperties.$moment = moment;

app.use(createPinia());
app.use(router);

app.mount("#app");
