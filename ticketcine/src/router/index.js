import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import FilmsDetails from '../views/FilmsDetails.vue';
import Tickets from '../views/Tickets';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/film",
    name: "FilmsDetails",
    component: FilmsDetails,
  },
  {
    path: "/ticket",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
