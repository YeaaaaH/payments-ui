import {createRouter, createWebHistory} from "vue-router";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Dashboard from "../views/Dashboard";

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

export default router;