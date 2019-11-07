<template>
  <div id="app">
    <example-table />
  </div>
</template>

<script>
import ExampleTable from "./examples/ExampleTable.vue";
export default {
  name: "app",
  components: {
    ExampleTable
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
