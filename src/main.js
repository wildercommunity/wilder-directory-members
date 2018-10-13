import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://wt-fc9679ce7625bd77470a290dafbfa8f9-0.sandbox.auth0-extend.com/auth0-users'

new Vue({
  render: h => h(App),
}).$mount('#app');
