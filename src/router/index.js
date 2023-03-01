import { createRouter, createWebHashHistory } from "vue-router";
import SearchShow from "../views/SearchShow/SearchShow.vue";
import ShowDetails from "../views/ShowDetails/ShowDetails.vue";
import HomeView from "../views/HomeView/HomeView.vue";
import PathNotFound from "../views/PathNotFound/PathNotFound.vue";
import { HOMEVIEW, SEARCHSHOW, SHOWDETAILS } from "@/constants/constants";

const routes = [
  {
    path: "/",
    name: HOMEVIEW,
    component: HomeView,
  },
  {
    path: "/search",
    name: SEARCHSHOW,
    component: SearchShow,
  },
  {
    path: "/showdetails",
    name: SHOWDETAILS,
    component: ShowDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PathNotFound
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
