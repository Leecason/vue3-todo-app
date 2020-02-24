import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
