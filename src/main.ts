import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

const vueQueryPluginConfig = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  },
};
createApp(App).use(VueQueryPlugin, vueQueryPluginConfig).mount('#app');
