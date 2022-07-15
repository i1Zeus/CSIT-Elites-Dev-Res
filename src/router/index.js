import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryShow from "../components/Category/CategoryShow.vue";
import SubCategoryShow from "../views/subCategoryShow.vue";
import SubCategoryCard from "../components/Category/SubCategoryCard.vue";
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
      path: "/subcategory",
      name: "subcategory",
      component: SubCategoryShow,
    },
    {
      path: "/subcategorycard",
      name: "subcategorycard",
      component: SubCategoryCard,
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
  ],
});

export default router;
