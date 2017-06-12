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
  font-size: 15px;
  color: #666666;
}
.left {
  position: fixed;
  top: 60px;
  left: 0;
  height: 100%;
  background-color: #1c2438;
}
.right {
  box-sizing: border-box;
  margin-top: 60px;
  width: 100%;
}
</style>
