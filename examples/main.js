import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import acDesign from "../src/index";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(acDesign);

const router = new VueRouter({
  esModule: false,
  mode: "history",
  routes: [
    {
      path: "/button",
      component: resolve => require(["./routers/button.vue"], resolve)
    }
  ]
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
