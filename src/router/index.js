import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import CategoryShow from "../views/Category/CategoryShow.vue";
import SubCategoryShow from "../views/Category/subCategoryShow.vue";
import ResShow from "../views/Resource/ResShow.vue";
import Resource from "../views/Resource/Resource.vue";

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
      path: "/subcategory",
      name: "subcategory",
      component: SubCategoryShow,
    },
    {
      path: "/add-rec",
      name: "addrec",
      component: () => import("../views/Resource/AddRec.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Home/LoginView.vue"),
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
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
