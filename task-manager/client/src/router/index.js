import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Task from "@/components/Task"
import TaskList from "@/components/TaskList"
import TaskNew from "@/components/TaskNew";
import TaskEdit from "@/components/TaskEdit";

import User from "@/components/User";
import UserLogin from "@/components/UserLogin";
import UserLogout from "@/components/UserLogout";
import UserView from "@/components/UserView";
import UserBoard from "@/components/UserBoard";
import UserList from "@/components/UserList";
import UserRegister from "@/components/UserRegister";

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/task',
      name: 'Task',
      component: Task,
      children: [
        {
          path: 'list',
          name: 'TaskList',
          component: TaskList,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'new',
          name: 'TaskNew',
          component: TaskNew,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'edit/:id',
          name: 'TaskEdit',
          component: TaskEdit,
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'list',
          name: 'UserList',
          component: UserList,
        },
        {
          path: 'view/:id',
          name: 'UserView',
          component: UserView,
        },
        {
          path: 'userboard',
          name: 'UserBoard',
          component: UserBoard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'register',
          name: 'UserRegister',
          component: UserRegister,
          meta: {
            guest: true
          }
        },
        {
          path: 'login',
          name: 'UserLogin',
          component: UserLogin,
          meta: {
            guest: true
          }
        },
        {
          path: 'logout',
          name: 'UserLogout',
          component: UserLogout,
          meta: {
            requiresAuth: true
          }
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: 'user/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
      next({ name: 'UserBoard'})
    }
  }else {
    next()
  }
})

export default router
