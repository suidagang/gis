import Vue from "vue";
import App from "./accessoriesList.vue";
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
  el: "#app",
  render: h => h(App)
});
