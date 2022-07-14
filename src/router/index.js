import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResShow from "../views/ResShow.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {path: "/", name: "home", component: HomeView },
    {path: "/Resorces", name: "ResShow", component: ResShow},
  ],
});

export default router;
