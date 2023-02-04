import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/HomePage.vue';
import Beer from './components/pages/BeerPage.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/beers/:id',
    component: Beer,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
