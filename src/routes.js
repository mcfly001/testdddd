import App from './App.js'
import About from './container/About'
import TodoList from './container/TodoList'

export default [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: App
    },
    childRoutes: [
      {
        path: 'about',
        component: About
      },
      {
        path: 'todolist',
        component: TodoList
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todolist',
    component: TodoList
  }
]