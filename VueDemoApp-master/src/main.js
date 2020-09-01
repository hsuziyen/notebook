// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import BlockUI from "vue-blockui";
import VeeValidate from "vee-validate";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BlockUI);
Vue.use(VeeValidate);

//style
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "font-awesome/css/font-awesome.css";

// axios
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
