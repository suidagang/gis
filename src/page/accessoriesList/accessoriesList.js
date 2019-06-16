import Vue from "vue";
import App from "./accessoriesList.vue";
import "@/less/siderBar.less";
//按需引入elementUI的样式
import {
  Button,
  Select,
  Option,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon 
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Icon);

new Vue({
  el: "#app",
  render: h => h(App)
});
