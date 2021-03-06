import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
import  './assets/my-mint.css';

Vue.use(MintUI);
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
