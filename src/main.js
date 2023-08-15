import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/styles/tailwind.css";
import "./assets/main.css";

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Page Not found";
  }
  next();
});
const app = createApp(App);
app.use(router);
app.mount("#app");
