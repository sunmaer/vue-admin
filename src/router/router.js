import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import * as types from '../store/types'

// 懒加载组件
const Login = r => require.ensure([], () => r(require('../app/login/Login')), 'login')
const Home = r => require.ensure([], () => r(require('../app/home/Home')), 'home')
const UserList = r => require.ensure([], () => r(require('../app/user/UserList')), 'userList')
const AddUser = r => require.ensure([], () => r(require('../app/user/AddUser')), 'addUser')

Vue.use(Router)

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


// 页面刷新时，重新赋值
if (window.sessionStorage.getItem('admin')) {
    store.commit(types.LOGIN, JSON.parse(window.sessionStorage.getItem('admin')))
}

const router = new Router({
    mode: 'history',
    routes
});

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

export default router;
