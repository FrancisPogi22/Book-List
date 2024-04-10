import { createRouter, createWebHistory } from "vue-router";
import BookList from "../components/BookView.vue";
import CartView from "../components/CartView.vue";
import LoginView from "../components/LoginForm.vue";
import RegisterView from "../components/RegisterForm.vue";
import store from "../store";

const beforeEachGuard = (to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.getters.isLoggedIn
  ) {
    next("/");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/book-list",
    name: "book-list",
    component: BookList,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

router.beforeEach(beforeEachGuard);

export default router;
