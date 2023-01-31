import { createRouter, createWebHistory } from 'vue-router'

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
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
