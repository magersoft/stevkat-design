import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Admin from '../views/Admin';
import Portfolio from '../views/Portfolio/Portfolio';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/chiki-briki',
    name: 'Admin',
    component: Admin
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router
