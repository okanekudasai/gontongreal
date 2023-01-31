import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '@/views/ProfileView.vue'
// import ShopView from '@/views/ShopView.vue'
import RankView from '@/views/RankView.vue'
// import RegisterView from '@/views/accounts/RegisterView.vue'

const routes = [
  {
    path: "/",
    name: 'start',
    component: () => import("@/views/StartView.vue")
  },
  {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/SearchView.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/rank/',
    name: 'Rank',
    component: RankView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
