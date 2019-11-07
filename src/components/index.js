import Vue from "vue";
import Table from "./Table.vue";

const Components = {
  Table
  // import another components here
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
