import { createApp } from 'vue';
import './tailwind.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { router } from './router';
import App from './App.vue';

const vueQueryPluginConfig = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  },
};

createApp(App).use(router).use(VueQueryPlugin, vueQueryPluginConfig).mount('#app');
