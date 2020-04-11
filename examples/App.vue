<template>
  <div id="app">
    <p>acui A Normal UI Toolkit built on Vue.js 2.0</p>
    <div class="nav-container">
      <ul class="nav-lists">
        <li><router-link to="/button">button</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "../src/styles/index.less";
</style>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  ul,
  li {
    text-decoration: none;
    list-style: none;
  }
}
</style>
