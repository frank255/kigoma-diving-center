import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Notfound from '../views/Notfound.vue'
import News from '../views/News.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    //catchAll 404
    {
      path: '/:catchAll(.*)',
      name: 'Notfound',
      component: Notfound
    }
  ]
})

export default router
