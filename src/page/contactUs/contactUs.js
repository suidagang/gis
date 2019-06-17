import Vue from "vue";
import App from "./contactUs.vue";
import router from './router'
//按需引入elementUI的样式
import {
  Button,
  Select,
  Option
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
