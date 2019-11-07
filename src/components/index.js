/* eslint-disable no-unused-vars */
import FlowlityGoodTable from "./tableComponents/Table.vue";

const FlowlityComponentsPlugin = {
  install(Vue, options) {
    Vue.component(FlowlityGoodTable.name, FlowlityGoodTable);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(FlowlityComponentsPlugin);
}

export { FlowlityGoodTable };
export default FlowlityComponentsPlugin;
