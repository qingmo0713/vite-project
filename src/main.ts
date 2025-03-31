import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

import "@/style/index.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import Pinia from "@/store";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(Pinia);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
