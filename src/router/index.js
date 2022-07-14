import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryShow from "../views/CategoryShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryShow,
    },
    {
      path:'/form',
      name:"form",
      component:()=>import('../views/FormView.vue')
    },
  ],
});

export default router;
