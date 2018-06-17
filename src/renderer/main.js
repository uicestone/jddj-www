import Vue from "vue";
import axios from "axios";
import iView from "iview";
import $ from "jquery";
import App from "./App";
import router from "./router";
import store from "./store";
import moment from "moment";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

import FastClick from "fastclick"
FastClick.attach(document.body);


Vue.filter("dt", (val, format) => (val > 10 ? val : "0" + val));
Vue.filter("MM", (val, format) => moment(val).format(format));


Vue.use(iView);

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

window.$ = $;

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: "<App/>"
}).$mount("#app");