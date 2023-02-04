import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/HomePage/HomePage.vue';
import Beer from './components/pages/beerPage/BeerPage.vue';

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
