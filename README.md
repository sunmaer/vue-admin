## 介绍

基于 vue-cli + iview 的 vue.js 的用户管理系统

## 技术栈

Vue2.0 + vuex + vue-router + axios + webpack + ES6 + Sass

## 参考网址

- [Vue.js 中文网](https://cn.vuejs.org/)
- [iView - 一套基于 Vue.js 的高质量 UI 组件库](https://www.iviewui.com/)
- [vue-router 中文网](http://router.vuejs.org/zh-cn/)
- [Vuex 中文网](https://vuex.vuejs.org/zh-cn/)

- [vue-devtools](https://github.com/vuejs/vue-devtools)

## 使用

``` bash
# 下载代码
$ git clone https://github.com/sunmaer/vue-user.git

# 进入项目
cd vue-user

# 安装依赖
npm install

# 开发调试
npm run dev

# 构建
npm run build

# 执行单元测试
npm run unit

# 执行所有测试
npm test
```

## vue-cli增强

#### 1.提供 Sass 支持

```bash
# 安装 node-sass、sass-loader
$ npm install --save-dev node-sass sass-loader
```

#### 2.用 axios 作为 ajax 方案
```bash
# 安装 axios
$ npm install --save axios
```

#### 3.用 Vuex 做状态管理
```bash
# 安装 vuex
$ npm install --save vuex
```

#### 4.用 ECharts 分析用户数据
```bash
# 安装 echarts
$ npm install --save echarts
```

## 项目结构

```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- node_modules                     // 项目依赖
|-- src                              // 源码目录
|   |-- app                          // 业务代码
|       |-- home                     // 系统首页，用户分析
|       |-- login                    // 登录页面
|       |-- user                     // 用户模块
|   |-- assets                       // 项目静态资源（图片等）
|   |-- components                   // 公共组件
|       |-- common                   // 公共组件
|       |-- header                   // 头部组件
|       |-- sideBar                  // 侧边导航栏组件
|   |-- router                       // 路由配置
|       |-- router.js                // 各业务模块路由配置
|   |-- store                        // Vuex 状态管理
|       |-- index.js                 // 侧边导航栏状态
|   |-- style                        // 样式
|       |-- common.css               // 公共样式
|   |-- App.vue                      // 页面入口
|   |-- main.js                      // 程序入口，加载各种公共组件
|-- static                           // 静态文件，如：图片、JSON 数据等
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- package.json                     // 项目基本信息
```

## 命名规范

#### 1.组件命名规范
按照 vue-cli 的 Hello 示例，组件命名遵循帕斯卡（pascal）命名法，如：MyComponent

#### 2.css 命名规范
采用 BEM 命名方式
```bash
.block{}
.block__element{}
.block--modifier{}
```
* .block 代表了更高级别的抽象或组件。
* .block__element 代表.block的后代，用于形成一个完整的.block的整体。
* .block--modifier代表.block的不同状态或不同版本。

## 目标功能
- [ ] 用户登录
- [ ] 添加用户
- [ ] 展示用户列表
- [ ] 用户分析
- [ ] 用户信息修改
- [ ] 权限管理 

## 功能说明

#### 前端权限控制

登录拦截：

第一步：路由拦截

首先在定义路由的时候就需要多添加一个自定义字段requireAuth，用于判断该路由的访问是否需要登录。如果用户已经登录，则顺利进入路由， 否则就进入登录页面。
```bash
const routes = [
  // 重定向，默认登录页面
  {
      path:'*',
      redirect: '/login'
  },
  // 登录页面
  {
    path: '/login',
    component: Login
  },
  // 系统首页
  {
    path: '/home',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    component: Home
  },
  // 用户列表页面
  {
    path: '/user/userList',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    component: UserList
  },
  // 添加用户页面
  {
    path: '/user/addUser',
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    component: AddUser    
  }
];
```
定义完路由后，主要利用vue-router提供的钩子函数beforeEach()对路由进行判断。
```bash
// 导航钩子，登录拦截
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
        if (JSON.stringify(store.state.admin) !== "{}") {  // 通过vuex state获取当前的admin，判断是否为空
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
```
第二步：http拦截
统一处理所有http请求和响应，就得用上 axios 的拦截器。

用户身份判断：

登录后根据 vuex state 获取用户身份，并利用 v-show 和 v-if 指令对不同身份的用户显示不同的界面，实现前端权限控制。

```bash
data() {
    return {
        navselected: '',
        identity: '' // 管理员身份
    }
},
mounted: function() {
    this.navselected = this.$store.state.activeName
    this.identity = this.$store.state.admin.identity // 获取管理员身份
}
```
```bash
<router-link to="/user/addUser" v-show="identity === 'super'"> // super 表示为超级管理员
    <Menu-item class="sideBar__item" name="3">
        <Icon type="person-add" size="18"></Icon>
        添加用户
    </Menu-item>
</router-link>
```