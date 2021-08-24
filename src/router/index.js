import {createRouter, createWebHistory} from "vue-router";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Home from "../views/Home";

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
    path: '/home',
    name: "home",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;