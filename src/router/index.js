import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import HomePage from "../components/Home/HomePage.vue";
// import CategoryShow from "../views/Category/CategoryShow.vue";
import SubCategoryShow from "../views/Category/subCategoryShow.vue";
import ResShow from "../views/Resource/ResShow.vue";
import ResourcesPage from "../views/Resource/ResourcesPage.vue";
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
      path: "/home",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/category/:id",
      name: "categories",
      component: SubCategoryShow,
      props: true,
    },
    {
      path: "/sub-section/:id",
      name: "resource",
      component: ResourcesPage,
      props: true,
    },
    {
      path: "/resource/:id",
      name: "ResShow",
      component: ResShow,
      props: true,
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
    
    
    // {
    //   path: "/resource",
    //   name: "Resource",
    //   component: Resource,
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
