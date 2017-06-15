import Vue from 'vue'
import Router from 'vue-router'

// 懒加载组件
const Header = r => require.ensure([], () => r(require('../components/header/Header')), 'header')
const SideBar = r => require.ensure([], () => r(require('../components/sideBar/SideBar')), 'sideBar')
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
      components: {
        header: Header,
        sideBar: SideBar,
        default: Home
      }
    },
    // 用户列表
    {
      path: '/user/userList',
      components: {
        header: Header,
        sideBar: SideBar,
        default: UserList
      }
    },
    // 添加用户
    {
      path: '/user/addUser',
      components: {
        header: Header,
        sideBar: SideBar,
        default: AddUser
      }      
    }
  ]
})
