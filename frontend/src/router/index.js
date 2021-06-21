import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../components/Main.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue';
import Notice from '../components/Notice.vue';

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
      path: '/notice',
      component: Notice
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/sign-up',
      component: SignUp
    }
  ]
})
