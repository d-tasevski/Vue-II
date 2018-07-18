import Vue from 'vue';
import Home from './components/Home.vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('app-status', Home);

new Vue({
	el: '#app',
	render: h => h(App),
});
