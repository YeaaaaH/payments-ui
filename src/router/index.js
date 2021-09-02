import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Dashboard from "../views/Dashboard";
import store from "../store";
const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: '/dashboard',
    name: "dashboard",
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _from, next) => {
  if (to.name == 'signin' || to.name == 'signup') {
    next()
  } else if (!store.state.auth.isLoggedIn && !window.localStorage.getItem('access_token')) {
    next({ name: 'signin' });
  } else next()
});

export default router;