import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthDefault from "../components/AuthDefault.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import { store } from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/home",
          name: "Home",
          component: HomeView,
        },
      ],
    },
    {
      path: "/auth",
      redirect: "/login",
      component: AuthDefault,
      meta: { isGuest: true },
      children: [
        {
          path: "/login",
          name: "Login",
          component: LoginView,
        },
        {
          path: "/register",
          name: "Register",
          component: RegisterView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.token) {
    next({ name: "Login" });
  } else if (store.state.token && to.meta.isGuest) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
