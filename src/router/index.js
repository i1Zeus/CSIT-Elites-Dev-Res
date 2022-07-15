import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryShow from "../components/Category/CategoryShow.vue";
import ResShow from "../views/ResShow.vue";

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
      path: "/add-rec",
      name: "addrec",
      component: () => import("../views/AddRec.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/resource",
      name: "ResShow",
      component: ResShow,
    },
  ],
});

export default router;
