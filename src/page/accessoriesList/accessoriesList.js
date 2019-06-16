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
  Icon,
  Link,
  dialog
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Icon);
Vue.use(Link);
Vue.use(dialog);

new Vue({
  el: "#app",
  render: h => h(App)
});
