import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:  import("../components/Home.vue"),
  },
  {
    path: '/bike/:id',
    name: 'bike',
    component: import("../components/BikeContainer.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router