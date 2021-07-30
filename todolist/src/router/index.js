import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Todos.vue')
  },
  {
    path: '/todos/create',
    name: 'todo-create',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoCreate.vue')
  },
  {
    path: '/todos/:id/update',
    name: 'todo-update',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
