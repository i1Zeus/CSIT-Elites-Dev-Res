import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryShow from "../views/CategoryShow.vue";
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
      path:'/add-rec',
      name:'addrec',
      component:()=>import('../views/AddRec.vue')
    },
    {
      path: "/resource",
       name: "ResShow",
        component: ResShow
      },
  ],
});

export default router;
