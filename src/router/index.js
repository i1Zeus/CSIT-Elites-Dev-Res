import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryShow from "../views/CategoryShow.vue";
import ResShow from "../views/ResShow.vue";
import Resource from "../views/Resource.vue";
import NotFound from "../views/NotFound.vue";
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
      path: "/resource/:id",
      name: "ResShow",
      component: ResShow,
      props: true,
    },
    {
      path: "/resource",
      name: "Resource",
      component: Resource,
      
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      
    },
  ],
});

export default router;
