import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../components/Main.vue'
import HelloWorld from '../components/HelloWorld.vue'
import LoginForm from '../components/LoginForm.vue'
import SignUpForm from '../components/SignUpForm.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/hello-world',
      component: HelloWorld
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/sign-up',
      component: SignUpForm
    }
  ]
})
