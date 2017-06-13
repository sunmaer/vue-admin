import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        sideBar: SideBar,
        default: UserList
      }
    },
    {
      path: '/addUser',
      components: {
        header: Header,
        sideBar: SideBar,
        default: AddUser
      }      
    }
  ]
})
