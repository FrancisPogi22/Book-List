import { createRouter, createWebHistory } from "vue-router";
import BookList from "../components/BookView.vue";
import CartView from "../components/CartView.vue";

const routes = [
  {
    path: "/",
    name: "book-list",
    component: BookList,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
