import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeIndex from './homeIndex';
import Video from './video';
import List from './list';
import Cart from './cart';
import Me from './me';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/HomeIndex',
    component: () => import('../views/HomeIndex')
  },
  HomeIndex,
  Video,
  List,
  Cart,
  Me
];

const router = new VueRouter({
  routes
});

export default router;
