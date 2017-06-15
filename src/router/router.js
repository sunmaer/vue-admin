import Vue from 'vue'
import Router from 'vue-router'

// 懒加载组件
const Login = r => require.ensure([], () => r(require('../app/login/Login')), 'login')
const Home = r => require.ensure([], () => r(require('../app/home/Home')), 'home')
const UserList = r => require.ensure([], () => r(require('../app/user/UserList')), 'userList')
const AddUser = r => require.ensure([], () => r(require('../app/user/AddUser')), 'addUser')

Vue.use(Router)

export default new Router({
  routes: [
    // 默认登录页面
    {
      path: '/',
      component: Login
    },
    // 登录页面
    {
      path: '/login',
      component: Login
    },
    // 系统首页
    {
      path: '/home',
      component: Home
    },
    // 用户列表页面
    {
      path: '/user/userList',
      component: UserList
    },
    // 添加用户页面
    {
      path: '/user/addUser',
      component: AddUser    
    }
  ]
})
