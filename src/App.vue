<template>
  <div id="app">
    <router-view name="header"></router-view>
    <Row>
      <Col class="left" span="4">
        <router-view name="sideBar"></router-view> 
      </Col>
      <Col class="right" span="20" offset="4">
        <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(245, 246, 250);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  color: #666666;
}
.left {
  position: fixed;
  z-index: 999;
  top: 60px;
  left: 0;
  height: 100%;
  background-color: #2d3545;
}
.right {
  box-sizing: border-box;
  margin-top: 60px;
}
</style>
