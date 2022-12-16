import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Notfound from '../views/Notfound.vue'
import News from '../views/News.vue'
import IndividualNews from '../views/IndividualNews.vue'
import Booking from '../views/Booking.vue'
import SearchBooking from '../views/SearchBooking.vue'
import Services from '../views/Services.vue'
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
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/searchbooking',
      name: 'SearchBooking',
      component: SearchBooking
    },
    {
      path: '/news/:id',
      name: 'IndividualNews',
      component: IndividualNews,
      props:true
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
