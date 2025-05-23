import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

import "@/style/index.scss";
//引入路由鉴权的文件
import "./permisstion";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import Visitor from "@/components/visitor/visitor.vue";

import Pinia from "@/store";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.component("Visitor", Visitor);

app.use(Pinia);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
