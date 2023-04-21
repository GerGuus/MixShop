import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationForm from "@/views/RegistrationForm.vue";
import LoginForm from "@/views/loginForm.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
        path: '/login',
        name: 'login',
        component: LoginForm
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationForm
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
