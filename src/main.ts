import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
// import VueRouter from "vue-router";

import { Button } from "vant";

createApp(App)
  .use(routes)
  .use(Button)
  .mount("#app");
